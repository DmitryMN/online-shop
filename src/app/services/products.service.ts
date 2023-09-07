import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { IProducts } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products"

  constructor(private http: HttpClient) { 
  }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.url)
  }

  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`)
  }

  postProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url, product)
  }

  removePost(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
