import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements AfterViewInit {

  @ViewChild('gitHub')
  git!: ElementRef<HTMLImageElement>;

  @Input()
  src: string | undefined;

  @Input()
  link: string = '';

  opacity: string = '0';
  
  constructor(private readonly _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.changeOpacity();
  }

  onOver() {
    this.opacity = '0.9';
    this.changeOpacity();
  }

  onOut() {
    this.opacity = '0';
    this.changeOpacity();
  }

  onClick() {
    this.opacity = '0';
    this.changeOpacity();
    window.open(this.link, '_blank');
  }

  private changeOpacity() {
    this._renderer.setStyle(this.git.nativeElement, 'opacity', this.opacity)
  }
}
