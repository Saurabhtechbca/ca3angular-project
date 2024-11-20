import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface WishlistItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: WishlistItem[] = [
    { id: 1, name: 'Organic Fertilizer', price: 20.99 },
    { id: 2, name: 'Seed Packet', price: 5.99 },
    { id: 3, name: 'Gardening Tools', price: 15.50 }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewProductDetails(productId: number): void {
    alert(`Viewing details for product #₹{productId}`);
  }

  removeFromWishlist(productId: number): void {
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== productId);
    alert(`Product #₹{productId} has been removed from your wishlist.`);
  }
}
