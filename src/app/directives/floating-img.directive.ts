import { Directive } from '@angular/core';

@Directive({
    selector: '[appImgFloat]',
    host: {'class': 'po-u-floating-img'}
})
export class ImgFloatDirective { }