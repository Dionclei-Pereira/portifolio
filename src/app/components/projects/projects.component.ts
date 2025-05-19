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
      icon: 'Spring',
      img: 'microservices',
      title: 'Ecommerce',
      description: 'A complete microservices structure made with JWT RSA, Spring Security, RabbitMQ and OpenFeign.',
      link: 'https://github.com/Dionclei-Pereira/ecommerce'
    }, {
      icon: 'C-Sharp',
      img: 'chess',
      title: 'Console Chess',
      description: 'A complete chess system with additional game modes.',
      link: 'https://github.com/Dionclei-Pereira/Console-Chess'
    }, {
      icon: 'Angular',
      img: 'portifolio',
      title: 'Portifolio',
      description: 'This application is made with Angular, using directives, pipes, components and TypeScript.',
      link: 'https://github.com/Dionclei-Pereira/portifolio'
    }, {
      icon: 'Spring',
      img: 'game-list',
      title: 'Game List',
      description: 'An application manages a list of games to a review website, features included: Cache Caffeine, JWT HMAC and Hibernate.',
      link: 'https://github.com/Dionclei-Pereira/dslist'
    }, {
      icon: 'Angular',
      img: 'process',
      title: 'Process Simulator',
      description: 'Angular project that simulates CPU scheduling algorithms and process queue behaviors in real time.',
      link: 'https://github.com/Dionclei-Pereira/ProcessSIM'
    }
  ]
}
