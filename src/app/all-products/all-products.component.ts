import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyProducts } from 'src/models/myProducts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  allProducts:MyProducts[]=[]

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.getAllproduct()
  }

  getAllproduct(){
    this.api.getAllProducts().subscribe((data:any)=>{

      console.log(data);
      
      this.allProducts=data
    })
  }

}
