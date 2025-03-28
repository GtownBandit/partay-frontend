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

  protected readonly Date = Date;
}
