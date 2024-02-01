import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss'
})
export class BlogPostCardComponent {
  @Input() image: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() readMore: string = 'Read Me';
}
