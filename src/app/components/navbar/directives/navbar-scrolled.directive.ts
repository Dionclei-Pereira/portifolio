import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appScroll]'
})
export class ScrolledDirective {

    @Input()
    scrollClass: string = 'po-c-navbar__scrolled';

    nav!: ElementRef<HTMLElement>;
    
    constructor(private el: ElementRef) {}

    @HostListener('window:scroll')
    onScroll(): void {
        console.log(this.el.nativeElement.classList)
        const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > 0) {
            this.el.nativeElement.classList.add(this.scrollClass);
        } else {
            this.el.nativeElement.classList.remove(this.scrollClass);
        }
    }
}