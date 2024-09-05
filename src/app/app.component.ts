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
    let delimiter = /,|\n/;
    let inputString = str;

    
    if (str) {
      if (str.startsWith('//')) {
        delimiter = new RegExp(str.split('\n').shift()!.substring(2));
        inputString = str.replace(/^\/\/.+\n/, '');
      }
      
      return inputString.split(delimiter).reduce((sum, num) => {
        return sum += +num;
      }, 0);
    }

    return 0;
  };

}
