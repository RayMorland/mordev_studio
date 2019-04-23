import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { TeamMemberPageComponent } from './pages/team-member-page/team-member-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const mainRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:id', component: TeamMemberPageComponent },
  { path: 'work', component: WorkComponent },
  { path: 'work/:id', component: CaseStudyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServicePageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainRoutingModule { }
