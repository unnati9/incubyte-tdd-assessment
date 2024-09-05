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
    let negativeValues: number[] = [];
    let sum = 0;

    if (str) {
      if (str.startsWith('//')) {
        delimiter = new RegExp(str.split('\n').shift()!.substring(2));
        inputString = str.replace(/^\/\/.+\n/, '');
      }

      sum = inputString.split(delimiter).reduce((total, num) => {
        if (+num < 0) {
          negativeValues.push(+num);
        }
        return (total += +num);
      }, 0);
    }

    if (negativeValues.length) {
      throw new Error(
        'No negative values are allowed: ' + negativeValues.join(', ')
      );
    }

    return sum | 0;
  };
}
