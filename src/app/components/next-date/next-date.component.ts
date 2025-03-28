import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-next-date',
  imports: [
    DatePipe
  ],
  templateUrl: './next-date.component.html',
  styleUrl: './next-date.component.css'
})
export class NextDateComponent {
  date: Date = new Date();

  constructor() {
    this.date = new Date(new Date().setDate(new Date().getDate() + 14));
  }
}
