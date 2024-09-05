import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'incubyte-tdd-assessment' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('incubyte-tdd-assessment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, incubyte-tdd-assessment');
  });

  it('#stringCalculator should return 0 for an empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('')).toBe(0);
  });

  it('#stringCalculator should return sum of 1 or 2 comma-separated numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1')).toBe(1);
    expect(app.stringCalculator('1,2')).toBe(3);
  });

  it('#stringCalculator should handle any amount of numbers and return sum', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1,2,3,4,5,6')).toBe(21);
    expect(app.stringCalculator('1,1,1,1,1,2,2,2,2,2')).toBe(15);
  });

  it('#stringCalculator should handle new lines between numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('1\n2,3')).toBe(6);
  });

  it('#stringCalculator should support different delimiters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stringCalculator('//;\n1;2')).toBe(3);
  });
});
