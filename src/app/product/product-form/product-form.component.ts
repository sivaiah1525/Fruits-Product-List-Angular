import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input('product') product: any;
  @Output() save = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();

  productForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product?.name || ''),
      price: new FormControl(this.product?.price || ''),
      count: new FormControl(this.product?.count || '')
    })
  }

  onSubmit() {
    if(this.product) {
      this.update.emit({...this.product, ...this.productForm.value})
    } else {
      this.save.emit(this.productForm.value)
    }
  }
}
