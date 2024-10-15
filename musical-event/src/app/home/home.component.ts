import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { ConcertCardComponent } from './concert-card/concert-card.component';

import { response } from 'express';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatSelectModule,
    ConcertCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeservice = inject(HomeService);
  ngOnInit(): void {
    this.homeservice.getData().subscribe((res) => {
      console.log(res.concerts[0].description);
    });
  }
}
