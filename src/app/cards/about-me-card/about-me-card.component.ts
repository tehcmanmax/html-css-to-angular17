import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-me-card',
  standalone: true,
  imports: [],
  templateUrl: './about-me-card.component.html',
  styleUrl: './about-me-card.component.scss'
})
export class AboutMeCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() paragraph: string = '';

}
