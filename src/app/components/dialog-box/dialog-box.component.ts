import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  constructor(private modalRef?: BsModalRef) { }
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  myForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    price: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.pattern(this.reg)]),
    year: new FormControl<string>('', [Validators.required]),
    processor: new FormControl<string>('', [Validators.required]),
    ssd: new FormControl<string>('', [Validators.required]),
    display: new FormControl<string>('', [Validators.required]),
  })

  get title() {
    return this.myForm.controls.title as FormControl
  }
  get price() {
    return this.myForm.controls.price as FormControl
  }
  get image() {
    return this.myForm.controls.image as FormControl
  }
  get year() {
    return this.myForm.controls.year as FormControl
  }
  get processor() {
    return this.myForm.controls.processor as FormControl
  }
  get ssd() {
    return this.myForm.controls.ssd as FormControl
  }
  get display() {
    return this.myForm.controls.display as FormControl
  }

  close() {
    this.modalRef?.hide()
  }

  submit() {
    const data: IProducts = {
      id: Date.now().toString(),
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
