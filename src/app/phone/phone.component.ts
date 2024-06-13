import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {

  phones=[
   {id:1, title:"iPhone",name:"iphone 15 pro max", price:3543, img:"/assets/images/i15Pro.jpeg"},
   {id:2, title:"iPhone",name:"iPhone 14", price:2943, img:"/assets/images/i14.png"},
   {id:3, title:"iPhone",name:"iPhone 13 pro max", price:2543, img:"/assets/images/i13.png"},
   {id:4, title:"iPhone",name:"iPhone 13 pro", price:2000, img:"/assets/images/i13pro.webp"}
  ]

}
