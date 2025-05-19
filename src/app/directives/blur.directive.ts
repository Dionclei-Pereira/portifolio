import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBlur]',
})
export class BlurDirective {
  @HostBinding('style.filter')
  filter = '';

  private _opacity = '0';

  @Input()
  set opacity(value: string) {
    this._opacity = value;
    this.setBlur();
  }

  get opacity(): string {
    return this._opacity;
  }

  setBlur(): void {
    this.filter = this._opacity === '0' ? '' : 'blur(3px)';
  }
}