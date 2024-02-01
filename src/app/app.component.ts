import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {CategoryNavbarComponent} from './layouts/category-navbar/category-navbar.component'
import {FooterComponent} from './layouts/footer/footer.component';
import {PostCardComponent} from './layouts/post-card/post-card.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {ServicesComponent} from './components/services/services.component';
import {WorkComponent} from './components/work/work.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoryNavbarComponent, FooterComponent, PostCardComponent,
    AboutComponent, BlogComponent, ContactComponent, HomeComponent, ReviewsComponent, ServicesComponent, WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'html-css-into-angular-app';
}
