import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './entry-page.component.html',
  styleUrl: './entry-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryPageComponent {
  title = 'unpackit';
}
