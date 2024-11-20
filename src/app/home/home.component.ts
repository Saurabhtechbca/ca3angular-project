import { Component } from '@angular/core';
import { Card2Component } from '../card2/card2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
