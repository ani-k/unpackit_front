import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { EntryPageComponent } from './app/core/pages/entry-page/entry-page.component';

bootstrapApplication(EntryPageComponent, appConfig)
  .catch((err) => console.error(err));
