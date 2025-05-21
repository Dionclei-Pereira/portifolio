import { AfterViewInit, Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[scrollObservable]'
})
export class scrollObservableDirective implements AfterViewInit {

    sections!: NodeListOf<HTMLElement>;
    navLinks!: NodeListOf<HTMLElement>;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = this.el.nativeElement.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navLink = this.el.nativeElement.querySelector(`a[href="#${id}"]`);

                if (entry.isIntersecting) {
                    this.navLinks.forEach(link => this.renderer.removeClass(link, 'text-purple'));
                    this.navLinks.forEach(link => this.renderer.addClass(link, "text-secondary"));
                    if (navLink) {
                        this.renderer.removeClass(navLink, "text-secondary");
                        this.renderer.addClass(navLink, 'text-purple');
                    }
                }
            });
        }, {
            threshold: 0.3
        });

        this.sections.forEach(section => observer.observe(section));
    }
}