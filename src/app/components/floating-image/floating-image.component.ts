import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-image',
  standalone: false,
  templateUrl: './floating-image.component.html',
  styleUrl: './floating-image.component.scss'
})
export class FloatingImageComponent {

  @Input()
  delay: string = "1";

  @Input({ required: true})
  src!: string;
}
