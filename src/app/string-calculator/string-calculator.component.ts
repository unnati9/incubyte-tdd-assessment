import { Component } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [],
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.css'
})
export class StringCalculatorComponent {
  result = 0;
  stringCalculator = (str: string): number => {
    let delimiter = /,|\n/;
    let inputString = str;
    let negativeValues: number[] = [];
    let sum = 0;

    if (str) {
      if (str.startsWith('//')) {

        delimiter = new RegExp(str.split('\n').shift()!.substring(2));
        console.log(delimiter);
        inputString = str.replace(/^\/\/.+\n/, '');
        console.log(inputString);
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

    this.result = sum;

    return sum;
  };
}
