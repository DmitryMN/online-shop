import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-collaps',
  templateUrl: './collaps.component.html',
  styleUrls: ['./collaps.component.scss']
})
export class CollapsComponent implements OnInit {

  isCollapsed = true

  constructor(private productService: ProductsService) { }

  @Input() prodId: string
  @Input() removeProd: (id: string) => void

  ngOnInit(): void {

  }

  removeProductHandler() {
    this.removeProd(this.prodId);
  }

}
