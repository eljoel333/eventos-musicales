import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-concert-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './concert-card.component.html',
  styleUrl: './concert-card.component.css',
})
export class ConcertCardComponent {}
