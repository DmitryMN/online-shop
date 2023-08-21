import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProducts[]
  productSubscription: Subscription

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
}
