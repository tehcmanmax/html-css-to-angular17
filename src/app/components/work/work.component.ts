import {Component} from '@angular/core';
import {ProjectCardComponent} from '../../cards/project-card/project-card.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
