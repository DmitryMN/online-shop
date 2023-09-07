import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BaseComponent } from './components/base/base.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsComponent } from './components/ui/collaps/collaps.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    BasketComponent,
    ProductDetailsComponent,
    BaseComponent,
    DialogBoxComponent,
    CreateProductComponent,
    CollapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
