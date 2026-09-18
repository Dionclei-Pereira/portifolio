import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from "@angular/core";

@Directive({
    selector: '[scrollObservable]'
})
export class scrollObservableDirective implements AfterViewInit, OnDestroy {

    sections!: NodeListOf<HTMLElement>;
    navLinks!: NodeListOf<HTMLElement>;
    private observer!: IntersectionObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        // setTimeout: garante que as sections do app-root já foram renderizadas
        setTimeout(() => this.initObserver(), 0);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    private initObserver(): void {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = this.el.nativeElement.querySelectorAll('.nav-link');

        if (!this.sections.length || !this.navLinks.length) return;

        const setActive = (id: string | null) => {
            this.navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${id}`) {
                    this.renderer.addClass(link, 'active');
                } else {
                    this.renderer.removeClass(link, 'active');
                }
            });
        };

        // Fallback: home ativo no topo (antes de qualquer section cruzar o centro)
        setActive('home');

        this.observer = new IntersectionObserver(entries => {
            // Pega a section mais visível no momento
            let bestEntry: IntersectionObserverEntry | null = null;
            for (const entry of entries) {
                if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
                    bestEntry = entry;
                }
            }
            if (bestEntry?.target) {
                setActive(bestEntry.target.getAttribute('id'));
            }
        }, {
            // Faixa central da tela: só uma section por vez é "atual"
            // (desconta ~40% topo/fundo, compensa navbar fixa + conteúdo alto)
            rootMargin: '-40% 0px -40% 0px',
            threshold: [0, 0.1, 0.25, 0.5]
        });

        this.sections.forEach(section => this.observer.observe(section));
    }
}