import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      name: 'Satellite Email',
      icon: '🛰️',
      description: 'Send me an electronic signal!',
      link: 'mailto:dionclei2@gmail.com'
    }, {
      name: 'LinkedIn Planet',
      icon: '🌍',
      description: 'Network of interconnected people.',
      link: 'https://www.linkedin.com/in/dionclei-de-souza-pereira-07287726b/'
    }, {
      name: 'Github Moon',
      icon: '🌑',
      description: 'Universal gravitational repository.',
      link: 'https://github.com/Dionclei-Pereira'
    }, {
      name: 'Alien Phone',
      icon: '🛸',
      description: 'Instant interstellar communication.',
      link: 'tel:+5547996977940'
    }
  ]

  onClick(link: string): void {
    window.open(link, '_blank');
  }
}
