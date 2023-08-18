import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts[]>(this.url)
  }

  getProduct(id: number) {

  }

}
