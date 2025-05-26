import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      icons: ['Spring', 'Java', 'RabbitMQ'],
      img: 'microservices',
      title: 'Ecommerce',
      description: 'A robust microservices-based e-commerce system built with Spring Boot, Spring Security (JWT with RSA), RabbitMQ for messaging, and OpenFeign for inter-service communication.',
      link: 'https://github.com/Dionclei-Pereira/ecommerce',
      color: 'primary'
    },
    {
      icons: ['Angular', 'TypeScript', 'Sass'],
      img: 'portifolio',
      title: 'Portfolio',
      description: 'A personal portfolio website built with Angular, showcasing components, directives, pipes, TypeScript features, and responsive design principles.',
      link: 'https://github.com/Dionclei-Pereira/portifolio',
      color: 'danger'
    },
    {
      icons: ['C-Sharp', 'NET', 'VisualStudio'],
      img: 'chess',
      title: 'Chess',
      description: 'A fully functional chess application developed in C#, featuring classical gameplay along with custom game modes, move validation, and rule enforcement.',
      link: 'https://github.com/Dionclei-Pereira/Console-Chess',
      color: 'purple'
    },
    {
      icons: ['Angular', 'TypeScript', 'Bootstrap'],
      img: 'process',
      title: 'ProcessSIM',
      description: 'A real-time CPU scheduling simulator built with Angular that visualizes process queue management and various CPU scheduling algorithms including Round-Robin and Priority Scheduling.',
      link: 'https://github.com/Dionclei-Pereira/ProcessSIM',
      color: 'danger'
    }, 
    {
      icons: ['Spring', 'Java', 'Hibernate'],
      img: 'game-list',
      title: 'Game List',
      description: 'A backend API for managing and displaying game collections for a review platform. Developed with Spring Boot, featuring JWT authentication (HMAC), Caffeine cache, Hibernate, and RESTful services.',
      link: 'https://github.com/Dionclei-Pereira/dslist',
      color: 'primary'
    }
  ]

  index: number = 0;
  isFading: boolean = false;
  project = this.projects[0];

  prev(): void {
    if (this.index <= 0 || this.isFading) return;
    this.changeProject(this.index - 1);
  }

  next(): void {
    if (this.index >= (this.projects.length - 1) || this.isFading) return;
    this.changeProject(this.index + 1);
  }

  open(link: string): void {
    window.open(link, '_blank');
  }

  changeProject(value: number) {
    this.isFading = true;
    setTimeout(() => {
      this.index = value;
      this.project = this.projects[value];
      this.isFading = false;
    }, 250);
  }
}
