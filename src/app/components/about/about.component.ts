import {Component} from '@angular/core';
import {AboutMeCardComponent} from '../../cards/about-me-card/about-me-card.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutMeCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
}
