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
    'C-Sharp'
  ]
}
