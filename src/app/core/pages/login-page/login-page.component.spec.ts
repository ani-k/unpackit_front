import { TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unpackit' title`, () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unpackit');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, unpackit');
  });
});
