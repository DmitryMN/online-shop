import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject, Subscription, Observable } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProducts[]
  productSubscription: Subscription
  isEdit: boolean = true
  modalRef: BsModalRef

  constructor(private productService: ProductsService, public modalService: BsModalService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  removeProduct = (id: string) => {
    
    this.productService.removePost(id).subscribe((data) => {
      this.products = this.products.filter((prod) => prod.id !== id);
    })    
  }

  openModal(): void {
    this.modalRef = this.modalService.show(DialogBoxComponent);
    this.modalRef.content.onClose = new Subject<IProducts>();
    this.modalRef.content.onClose.subscribe((result: IProducts) => {
      this.productService.postProduct(result).subscribe((prod) => {
        this.products.push(result);
      })
    })
  }
}
