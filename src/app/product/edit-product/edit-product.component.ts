import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productdetails: any;
  productid: string;
  neweditdetails: any;
  toggle: any
  product: any;
  constructor(private router: Router,
    private activatrout: ActivatedRoute,
    private service: ProductService,
    
  ) {
    this.productid = this.activatrout.snapshot.paramMap.get("id")
    this.getproductbyid();
  }

  ngOnInit(): void {
  }



  async getproductbyid() {
    try {
      const id = this.productid;
      this.productdetails = await this.service.getproductbyid(id);
    } catch (error) {
      console.log('error')
    }

  }


  async onUpdate(event) {
    try {
      const id = this.productid;
      const data = event;
      console.log(this.productid)
      await this.service.updateProduct(this.productid, event);
      this.service.getAllproducts();
      this.router.navigate(["productdetails"]);

    } catch (error) {
      console.log('error')
    }
  }

}
