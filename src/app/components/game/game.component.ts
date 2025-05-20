import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements AfterViewInit, OnDestroy {

  @Output()
  closeEmmiter = new EventEmitter<void>();

  @ViewChild('dino')
  dino!: ElementRef<HTMLImageElement>;

  @ViewChild('cactus')
  cactus!: ElementRef<HTMLImageElement>;

  score: number = 0;
  anim: number = 1;
  isOpen: boolean = false;

  constructor(private readonly _renderer: Renderer2) { }

  onClose(): void {
    this.closeEmmiter.emit();
  }

  ngAfterViewInit(): void {
    this.loop();
  }

  ngOnDestroy(): void {
    this.isOpen = false;
  }

  private loop(): void {
    if (this.isOpen) {

      setTimeout(() => {
        this.toggleDino();
        this.checkDeath();
        this.loop();
        this.score++;
      }, 100);
    }
  }

  private toggleDino(): void {
    let value = `assets/images/dino-${this.anim}.png`;
    this._renderer.setAttribute(this.dino.nativeElement, 'src', value)
    this.anim = this.anim === 1 ? 2 : 1;
  }

  jump() {
    if (!this.isOpen) {
      this.score = 0;
      this.isOpen = true;
      this.loop();
      return;
    };
    
    let dino = this.dino.nativeElement;
    if (!dino.classList.contains('anim')) {
      this._renderer.addClass(dino, 'anim');
      setTimeout(() => {
        this._renderer.removeClass(dino, 'anim');
      }, 500);
    }
  }

  checkDeath() {
    const dinoRect = this.dino.nativeElement.getBoundingClientRect();
    const cactusRect = this.cactus.nativeElement.getBoundingClientRect();

    const isCollision =
      dinoRect.left < cactusRect.right &&
      dinoRect.right > cactusRect.left &&
      dinoRect.top < cactusRect.bottom &&
      dinoRect.bottom > cactusRect.top;

    if (isCollision) {
      this.isOpen = false;
    }
  }
}