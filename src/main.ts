import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginPageComponent } from './app/core/pages/login-page/login-page.component';

bootstrapApplication(LoginPageComponent, appConfig)
  .catch((err) => console.error(err));
