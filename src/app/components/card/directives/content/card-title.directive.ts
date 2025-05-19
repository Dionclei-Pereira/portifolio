import { Directive } from '@angular/core';

@Directive({
    selector: 'app-card-title',
    host: {'class': 'h2'}
})
export class CardTitleDirective { }