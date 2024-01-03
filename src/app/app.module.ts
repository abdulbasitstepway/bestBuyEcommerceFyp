import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderHeadComponent } from './component/header-head/header-head.component';
import { HeaderMainComponent } from './component/header-main/header-main.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CarouselComponent } from './component/carousel/carousel.component';


import { CarouselModule } from 'primeng/carousel';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { FooterMainComponent } from './component/footer-main/footer-main.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HeaderHeadComponent,
    HeaderMainComponent,
    HomeComponent,
    ShopComponent,
    CarouselComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterMainComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    StyleClassModule,
    InputNumberModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
