import {Component} from '@angular/core';
import {TitleComponent} from '../components/title/title.component';
import {CardComponent} from '../shared/card/card.component';
import {NextDateComponent} from '../components/next-date/next-date.component';
import {FooterComponent} from '../components/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [
    TitleComponent,
    CardComponent,
    NextDateComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
