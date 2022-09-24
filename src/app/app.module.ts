import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { AudioItemsComponent } from './electronics/audio-items/audio-items.component';
import { LaptopComponent } from './electronics/laptop/laptop.component';
import { SmartWearablesComponent } from './electronics/smart-wearables/smart-wearables.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionProductsComponent } from './fashion/fashion-products/fashion-products.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ElectronicsComponent,
    MobilesComponent,
    HomeComponent,
    AdminComponent,
    UsersComponent,
    AudioItemsComponent,
    LaptopComponent,
    SmartWearablesComponent,
    AdvertisementComponent,
    FashionComponent,
    FashionProductsComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    CounterComponent,
    CounterchildComponent,
    ProductdetailsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
