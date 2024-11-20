import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Card2Component } from './card2/card2.component';
import { FooterComponent } from './footer/footer.component';
import { ExclusiveOffersComponent } from './exclusive-offers/exclusive-offers.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { LoginSystemComponent } from './login-system/login-system.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OffersComponent } from './cards/cards.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,Card2Component, FooterComponent,ExclusiveOffersComponent,OffersComponent,ContactSupportComponent,LoginSystemComponent,RouterOutlet,CarouselComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ca3angular';
}
