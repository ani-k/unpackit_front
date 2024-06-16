import {Routes} from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {NotFoundPageComponent} from "./core/pages/not-found-page/not-found-page.component";

export const routes: Routes = [
  {
    path: '',
    title: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    title: '404',
    component: NotFoundPageComponent
  },
];
