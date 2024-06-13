import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"phone", component: PhoneComponent},
  {path:"phonedetails", component: PhoneDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
