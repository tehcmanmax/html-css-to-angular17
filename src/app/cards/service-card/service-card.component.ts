import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() icon: string = '';
  @Input() title: string = 'a title';
  @Input() paragraph: string = 'paragraph';
  readonly link: string = 'Read More';
}
