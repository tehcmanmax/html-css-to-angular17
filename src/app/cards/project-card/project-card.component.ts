import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() paragraph: string = '';
  @Input() readonly link: string ='Read more';
}
