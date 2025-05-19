import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'appCardRedirect',
})
export class CardRedirectDirective {

    @HostBinding('style.filter')
    filter: string = '';

    @HostListener('mouseover')
    onMouseover(): void {
        this.filter = 'blur(5px)';
    }

}