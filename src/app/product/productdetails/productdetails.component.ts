import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productdetails: any;

  constructor(
    private servicrs: ProductService,
    private router: Router,
  ) {
    this.getAllproductes();
  }
  ngOnInit(): void {

  }

  async getAllproductes() {
    try {
      this.productdetails = await this.servicrs.getAllproducts();
      console.log(this.productdetails)
    } catch (error) {
      console.log(error)
    }
  }


  handealClick(x) {
    this.router.navigate(["/Editproduct", x.id]);
  }


  async deleteproduct(x) {
    try {
      await this.servicrs.deleteproduct(x.id);
      this.getAllproductes()
    } catch (error) {
      console.log(error);
    }
  }

}
