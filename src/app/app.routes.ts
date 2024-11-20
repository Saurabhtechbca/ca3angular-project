import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'signup',component:SignupComponent },
    {path:'view-orders',component:ViewOrdersComponent },
    {path:'wishlist',component:WishlistComponent},
    {path:'cart',component:CartComponent}
];
