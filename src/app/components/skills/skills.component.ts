import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  images: string[] = [
    'Java',
    'Spring',
    'Angular',
    'TypeScript',
    'Bootstrap',
    'RabbitMQ',
    'PHP.svg',
    'Laravel.svg',
    'AWS.svg'
  ]

  srcFor(img: string): string {
    return img.endsWith('.svg')
      ? `assets/images/${img}`
      : `assets/images/${img}.png`;
  }
}
