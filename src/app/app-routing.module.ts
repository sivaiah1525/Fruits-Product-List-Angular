import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';


const routes: Routes = [
  {
    path:'productdetails',
    component:ProductdetailsComponent
  },
  {
    path:'',
    redirectTo:'/productdetails',
    pathMatch:'full'
  },
  
  {
    path:'Addproduct',
    component:AddProductComponent
  },
  {
    path:'Editproduct/:id',
    component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
