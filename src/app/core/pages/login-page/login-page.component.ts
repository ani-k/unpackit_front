import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "../../components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  title = 'unpackit';
}
