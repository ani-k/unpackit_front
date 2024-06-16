import { TestBed } from '@angular/core/testing';
import { EntryPageComponent } from './entry-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryPageComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EntryPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unpackit' title`, () => {
    const fixture = TestBed.createComponent(EntryPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unpackit');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EntryPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, unpackit');
  });
});
