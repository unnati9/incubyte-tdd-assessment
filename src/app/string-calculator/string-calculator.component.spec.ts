import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringCalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Incubyte TDD Assessment: String Calculator TDD Kata

  it('#stringCalculator should return 0 for an empty string', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('')).toBe(0);
  });

  it('#stringCalculator should return sum of 1 or 2 comma-separated numbers', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1')).toBe(1);
    expect(app.stringCalculator('1,2')).toBe(3);
  });

  it('#stringCalculator should handle any amount of numbers and return sum', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1,2,3,4,5,6')).toBe(21);
    expect(app.stringCalculator('1,1,1,1,1,2,2,2,2,2')).toBe(15);
  });

  it('#stringCalculator should handle new lines between numbers', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1\n2,3')).toBe(6);
  });

  it('#stringCalculator should support different delimiters', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('//;\n1;2')).toBe(3);
  });

  it('#stringCalculator should throw exception for negative number input', () => {
    const fixture = TestBed.createComponent(StringCalculatorComponent);
    const app = fixture.componentInstance;
    expect(() => app.stringCalculator('1,-2')).toThrowError(
      'No negative values are allowed: -2'
    );
    expect(() => app.stringCalculator('1,-2,-3')).toThrowError(
      'No negative values are allowed: -2, -3'
    );
  });
});
