import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  constructor(private modalRef?: BsModalRef) { }

  myForm = new FormGroup({
    title: new FormControl<string>('', []),
    price: new FormControl<string>('', []),
    image: new FormControl<string>(''),
    year: new FormControl<string>('', []),
    processor: new FormControl<string>('', []),
    ssd: new FormControl<string>('', []),
    display: new FormControl<string>('', []),
  })

  close() {
    this.modalRef?.hide()
  }

  submit() {
    const data: IProducts = {
      id: new Date().toString(),
      title: this.myForm.value.title ?? '',
      price: Number(this.myForm.value.price) ?? 0,
      image: this.myForm.value.image ?? '',
      year: this.myForm.value.year ?? '',
      configure: {
        processor: this.myForm.value.processor ?? '',
        ssd: this.myForm.value.ssd ?? '',
        display: this.myForm.value?.display ?? '',
      }
    }
    this.modalRef?.content.onClose.next(data)
    this.modalRef?.hide()
  }


}
