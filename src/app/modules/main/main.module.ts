import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { HomeCaseStudyComponent } from './components/cases/home-case-study/home-case-study.component';
import { HomeServiceComponent } from './components/services/home-service/home-service.component';
import { HomeTestimonialsComponent } from './components/testimonials/home-testimonials/home-testimonials.component';
import { HomeBlogpostsComponent } from './components/blogposts/home-blogposts/home-blogposts.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    CaseStudyComponent,
    BlogPostComponent,
    HomeCaseStudyComponent,
    HomeServiceComponent,
    HomeTestimonialsComponent,
    HomeBlogpostsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
