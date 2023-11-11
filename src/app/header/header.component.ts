import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = 'https://res-console.cloudinary.com/dkrfmqbj1/thumbnails/v1/image/upload/v1696672955/SW1hZ2VBbmd1bGFyL0FydHlQcm9kX2l2YTNzdg==/preview';
  title = 'Welcome to our website';
}
