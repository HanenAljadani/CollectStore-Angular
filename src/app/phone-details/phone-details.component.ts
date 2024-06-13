import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';

import Toast from 'sweetalert2';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent {

  phones=[
    {id:1, title:"iPhone",name:"iphone 15 pro max", price:3543, img:"/assets/images/i15Pro.jpeg"},
    {id:2, title:"iPhone",name:"iPhone 14", price:2943, img:"/assets/images/i14.png"},
    {id:3, title:"iPhone",name:"iPhone 13 pro max", price:2543, img:"/assets/images/i13.png"},
    {id:4, title:"iPhone",name:"iPhone 13 pro", price:2000, img:"/assets/images/i13pro.webp"}
   ]
  private store = inject(Store);
  id:any;
  items:any;
  constructor(private route:ActivatedRoute){}
  increment(){
    this.store.dispatch(increment())
    const Toast = Swal.mixin({

      toast: true,

      position: "top-end",

      showConfirmButton: false,

      timer: 3000,

      timerProgressBar: true,

      didOpen: (toast) => {

        toast.onmouseenter = Swal.stopTimer;

        toast.onmouseleave = Swal.resumeTimer;

      }

    });

    Toast.fire({

      icon: "success",

      title: "Added Successfully"

    });
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.items = this.phones.find(e=>e.id == this.id)
     

  }

}
