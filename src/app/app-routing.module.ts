import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import components
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AdminComponent } from './admin/admin.component';
import { FashionComponent } from './fashion/fashion.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'admin',component:ProductdetailsComponent},
  {path:'fashion',component:FashionComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'cartitem',component:CartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
