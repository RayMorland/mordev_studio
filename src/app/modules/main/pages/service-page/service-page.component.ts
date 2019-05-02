import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  @Input() service: any;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getService();
  }

  getService(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.servicesService.getService(id)
      .subscribe(service => this.service = service);
  }

  goBack(): void {
    this.location.back();
  }
}
