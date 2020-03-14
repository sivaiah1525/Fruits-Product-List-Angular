import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  neweCreatDetails: any;
  constructor(
    private productServe: ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.neweCreatDetails = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      count: new FormControl('')
    })
  }


  async creatProduct(event) {
    try {
      await this.productServe.creatNewProduct(event);
      this.router.navigate(["productdetails"]);
    } catch (error) {
      console.log(error)

    }
  }
  

}
