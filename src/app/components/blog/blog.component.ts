import {Component} from '@angular/core';
import {BlogPostCardComponent} from '../../cards/blog-post-card/blog-post-card.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogPostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
