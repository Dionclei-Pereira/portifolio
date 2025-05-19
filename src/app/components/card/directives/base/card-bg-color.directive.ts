import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appbgColor]',
})
export class BgColorDirective implements OnChanges {

    @Input()
    color: string = '';

    @HostBinding('class')
    class = '';

    ngOnChanges(): void {
        this.class = this.color ? `bg-${this.color}` : '';
    }
}