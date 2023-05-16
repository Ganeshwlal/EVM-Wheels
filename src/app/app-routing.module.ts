import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {
    path:'',component:AllProductsComponent
  },
  {
    path:'add-products',component:AddProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
