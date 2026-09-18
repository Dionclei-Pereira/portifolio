import { Component } from '@angular/core';

interface Project {
  icons: string[];
  img: string;
  title: string;
  description: string;
  link: string;
  color: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      icons: ['Spring', 'Java', 'RabbitMQ'],
      img: 'microservices',
      title: 'Ecommerce',
      description: 'Microservices e-commerce API with Spring Boot, Spring Security (JWT with RSA), RabbitMQ messaging, Eureka discovery and centralized config.',
      link: 'https://github.com/Dionclei-Pereira/ecommerce',
      color: 'primary',
      tags: ['Java 21', 'Spring Boot', 'Microservices', 'RabbitMQ', 'Docker']
    },
    {
      icons: ['Java', 'Spring', 'Angular'],
      img: 'game-list',
      title: 'URL Shortener',
      description: 'Full stack URL shortener with Spring Boot REST API (JWT HMAC, MySQL), Angular 19 frontend and Docker Compose setup.',
      link: 'https://github.com/Dionclei-Pereira/url-shortener',
      color: 'info',
      tags: ['Java 21', 'Spring Boot', 'MySQL', 'Angular', 'Docker']
    },
    {
      icons: ['Java', 'Spring', 'Angular'],
      img: 'process',
      title: 'dChat',
      description: 'Full stack real-time chat with Spring Boot WebSocket + STOMP, RabbitMQ routing, MongoDB persistence and Angular frontend.',
      link: 'https://github.com/Dionclei-Pereira/dChat',
      color: 'success',
      tags: ['Java 21', 'WebSocket', 'RabbitMQ', 'MongoDB', 'Angular']
    },
    {
      icons: ['Spring', 'Java', 'Hibernate'],
      img: 'game-list',
      title: 'Game List',
      description: 'REST API for game collections with JWT auth (HMAC), Caffeine cache, pagination, Hibernate/JPA and role-based access.',
      link: 'https://github.com/Dionclei-Pereira/dslist',
      color: 'primary',
      tags: ['Java 21', 'Spring Boot', 'Hibernate', 'JWT', 'JUnit5']
    },
    {
      icons: ['Angular', 'TypeScript', 'Bootstrap'],
      img: 'process',
      title: 'ProcessSIM',
      description: 'Real-time CPU scheduling simulator in Angular visualizing FIFO, SJF, Round-Robin and priority scheduling.',
      link: 'https://github.com/Dionclei-Pereira/ProcessSIM',
      color: 'danger',
      tags: ['Angular', 'TypeScript', 'Angular Material']
    },
    {
      icons: ['PHP.svg', 'Laravel.svg', 'Bootstrap'],
      img: 'portifolio',
      title: 'API Playground',
      description: 'Laravel 13 + PHP 8.3 playground API for experimenting with REST endpoints, validation and testing with PHPUnit.',
      link: 'https://github.com/Dionclei-Pereira/api-playground',
      color: 'purple',
      tags: ['PHP 8.3', 'Laravel 13', 'REST API', 'PHPUnit']
    }
  ]

  index: number = 0;
  isFading: boolean = false;
  project = this.projects[0];

  iconSrc(icon: string): string {
    return icon.endsWith('.svg') ? `assets/images/${icon}` : `assets/images/${icon}.png`;
  }

  iconLabel(icon: string): string {
    return icon.replace('.svg', '').replace('.png', '');
  }

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
