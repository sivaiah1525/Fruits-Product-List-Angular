import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, ) { }



  getAllproducts() {
    const url = 'http://localhost:5000/api/products/';
    return this.http.get(url).toPromise();
  }

  getproductbyid(id) {
    const url = `http://localhost:5000/api/products/${id}`;
    return this.http.get(url).toPromise();
  }

  updateProduct(id, data) {
    console.log(id)
    const url = `http://localhost:5000/api/products/${id}`;
    return this.http.put(url, data).toPromise();
  }

  creatNewProduct(data) {
    const url = 'http://localhost:5000/api/products/';
    return this.http.post(url, data).toPromise();
  }
  deleteproduct(id){
    const url = `http://localhost:5000/api/products/${id}`;
    return this.http.delete(url).toPromise();
  }



}
