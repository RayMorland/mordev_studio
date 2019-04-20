import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderService } from 'src/app/shared/header/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subscription: Subscription;
  headerWhite = false;
  url = '';

  @ViewChild('logo') logo: ElementRef;
  @ViewChild('work') work: ElementRef;
  @ViewChild('blog') blog: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('contact') contact: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (this.url.split('/')[1] === 'work' && this.url.split('/').length >= 3) {
      if (window.scrollY >= .7 * window.innerHeight) {
        this.logo.nativeElement.style.color = 'black';
        this.work.nativeElement.style.color = 'black';
        this.blog.nativeElement.style.color = 'black';
        this.about.nativeElement.style.color = 'black';
        this.contact.nativeElement.style.color = 'black';
      } else if (window.scrollY < window.innerHeight) {
        this.logo.nativeElement.style.color = 'white';
        this.work.nativeElement.style.color = 'white';
        this.blog.nativeElement.style.color = 'white';
        this.about.nativeElement.style.color = 'white';
        this.contact.nativeElement.style.color = 'white';
      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.subscription = this.headerService.location.subscribe((res) => {
      this.url = res;
      this.changeNavColor();
    });
  }

  getCaseStudy(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  changeNavColor(): void {
    if (this.url.split('/')[1] === 'work' && this.url.split('/').length >= 3) {
      this.logo.nativeElement.style.color = 'white';
      this.work.nativeElement.style.color = 'white';
      this.blog.nativeElement.style.color = 'white';
      this.about.nativeElement.style.color = 'white';
      this.contact.nativeElement.style.color = 'white';
    } else {
      this.logo.nativeElement.style.color = 'black';
      this.work.nativeElement.style.color = 'black';
      this.blog.nativeElement.style.color = 'black';
      this.about.nativeElement.style.color = 'black';
      this.contact.nativeElement.style.color = 'black';
    }
  }

}
