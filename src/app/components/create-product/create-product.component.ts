import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  myForm = new FormGroup({
    title: new FormControl<string>('', []),
    price: new FormControl<string>('', []),
    year: new FormControl<string>('', []),
    processor: new FormControl<string>('', []),
    ssd: new FormControl<string>('', []),
    display: new FormControl<string>('', []),
  })

  submit() {
    console.log(this.myForm.value);
  }

}
