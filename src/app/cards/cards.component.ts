import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule
@Component({
  selector: 'app-offers',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class OffersComponent {
  categories = [
    {
      imageUrl: "https://krishisevakendra.in/cdn/shop/files/KatyayaniWeedkiller.webp",
      title: "Herbicides"
    },
    {
      imageUrl: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/20e5d139-6e02-40ef-b605-f7bf3b172eab.webp",
      title: "Growth Promoters"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1678677947273-47497a96ae1c",
      title: "Farming Machinery"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1601368156156-fb9e52e2f5dd",
      title: "Vegetable Seeds"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1547521420-b4c2986ef668",
      title: "Animal Husbandry"
    },
    {
      imageUrl: "https://www.agriplexindia.com/cdn/shop/collections/Insecticides.png",
      title: "Insecticides"
    },
    {
      imageUrl: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/dee99b23-8f3c-418f-b611-d54b3ecd5d5d.webp",
      title: "Offers"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1725274998821-8c30e0d1ce05",
      title: "Flower Seeds"
    },
    {
      imageUrl: "https://blog.ffreedom.com/wp-content/uploads/2022/12/Indian-organic-farming-a-vision-for-a-healthy-country.jpg",
      title: "Organic Farming"
    },
    {
      imageUrl: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/aee4a98b-afc8-43be-a4df-aa18ca3af902.webp",
      title: "New Products"
    },
    {
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/9/PA/XS/CL/46483534/new-product-500x500.jpeg",
      title: "Nutrients"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw",
      title: "Government Schemes"
    }
  ];
}
