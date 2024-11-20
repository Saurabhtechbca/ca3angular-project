import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Order {
  id: number;
  customerName: string;
  orderDate: Date;
  status: 'Pending' | 'Completed'|'Cancelled';
}

@Component({
  selector: 'app-view-orders',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[] = [
    { id: 1, customerName: 'Pulkit Chaudhary', orderDate: new Date('2024-10-05'), status: 'Completed' },
    { id: 2, customerName: 'Abhinay Shah', orderDate: new Date('2024-10-07'), status: 'Pending' },
    { id: 3, customerName: 'Vishal Sharma', orderDate: new Date('2024-10-08'), status: 'Completed' },
    { id: 4, customerName: 'Akash', orderDate: new Date('2023-10-10'), status: 'Pending' },
  ];

  constructor() {}

  ngOnInit(): void {}

  viewOrderDetails(orderId: number): void {
    alert(`Viewing details for order #${orderId}`);
  }

  cancelOrder(orderId: number): void {
    const orderIndex = this.orders.findIndex(order => order.id === orderId);
    if (orderIndex > -1) {
      this.orders[orderIndex].status = 'Cancelled';
      alert(`Order #${orderId} has been cancelled.`);
    }
  }
}
