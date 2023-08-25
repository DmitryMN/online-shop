import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  myForm = new FormGroup({
    title: new FormControl<string>('', [
    ]),
    price: new FormControl<string>('', [
    ]),

  })
}
