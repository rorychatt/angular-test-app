import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  keyUpHandler(event: KeyboardEvent) {
    console.log('User pressed key:', event.key);
  }
  homeMessage = signal('Hello, World!');
}
