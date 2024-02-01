import {Component} from '@angular/core';
import {ServiceCardComponent} from '../../cards/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
