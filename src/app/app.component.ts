import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'incubyte-tdd-assessment';

  stringCalculator = (str: string): number => {
    const newLineDelimiter = /,|\n/;
    if (str) {
      return str.split(newLineDelimiter).reduce((sum, num) => {
        return sum += +num;
      }, 0);
    }
    return 0;
  };
}
