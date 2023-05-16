import { Component, OnInit} from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MyProducts } from 'src/models/myProducts';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{

  product:MyProducts = {}

  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    
  }




  addContact(){
    this.api.addProduct(this.product).subscribe((data:any)=>{
      console.log(data);
      alert('New Product added successfully')

      this.router.navigateByUrl('')

      
    })
  }

}
