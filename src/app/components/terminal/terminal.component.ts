import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: false,
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})
export class TerminalComponent {

  history: string[] = [];
  currentInput: string = '';

  @Output()
  gameEmmiter = new EventEmitter<void>();

  commands: Record<string, () => string> = {
    help: () => 'Available commands: help, about, skills, projects, play, clear',
    about: () => 'Hi! I am a full stack developer, my name is Dionclei',
    skills: () => 'C#, Java, Spring Boot, Angular, RabbitMQ, Hibernate...',
    projects: () => 'Available projects: github.com/Dionclei-Pereira',
    clear: () => { this.history = []; return ' '; },
    play: () => { this.gameEmmiter.emit(); return '🎮 Starting game...' }
  };

  executeCommand() {

    const input = this.currentInput.trim().toLowerCase();
    this.history.push(`> ${input}`);

    const result = this.commands[input]?.() || `Command not recognized: ${input}`;

    if (result) this.history.push(result);
    this.currentInput = '';
  }
}