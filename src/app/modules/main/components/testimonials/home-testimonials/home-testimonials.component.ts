import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss']
})
export class HomeTestimonialsComponent implements OnInit {

  @Input() testimonials: any;
  currentTestimonial: any;
  testimonialsLength: number;
  currentIndex: number;

  constructor() { }

  ngOnInit() {
    if (this.testimonials) {
      this.currentTestimonial = this.testimonials[0];
      this.currentIndex = 1;
      this.testimonialsLength = this.testimonials.length;
    }
  }

  changeTestimonial(next: number) {
    if (next === -1) {
      if (this.currentIndex === 1) {
        this.currentIndex = this.testimonialsLength;
        this.currentTestimonial = this.testimonials[this.currentIndex - 1];
      } else {
        this.currentIndex = this.currentIndex - 1;
        this.currentTestimonial = this.testimonials[this.currentIndex];
      }
    } else if (next === 1) {
      if (this.currentIndex === this.testimonialsLength) {
        this.currentIndex = 1;
        this.currentTestimonial = this.testimonials[0];
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.currentTestimonial = this.testimonials[this.currentIndex - 1];
      }
    }
  }

}
