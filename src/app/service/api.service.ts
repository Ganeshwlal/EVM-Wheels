import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MyProducts } from 'src/models/myProducts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/products'

  constructor(private http:HttpClient) { }

  //api call for get products
  getAllProducts():Observable<MyProducts>{
    return this.http.get(this.baseUrl)
  }

//api for add product
  addProduct(productBody:any){
    return this.http.post(this.baseUrl,productBody)
  }
}
