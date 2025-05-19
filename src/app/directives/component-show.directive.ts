import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appShow]',
})
export class ShowDirective implements OnInit {

    @HostBinding('style.opacity') 
    opacity = '0';

    @HostBinding('style.transform')
    transform = 'scale(0.95)';

    @HostBinding('style.filter')
    filter = 'blur(1px)';

    constructor (private readonly el: ElementRef) {}

    ngOnInit(): void {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.opacity = '1';
                    this.transform = 'scale(1)';
                    this.filter = '';
                }
            })
        }, {
            threshold: 0.35
        })

        observer.observe(this.el.nativeElement);
    }
}