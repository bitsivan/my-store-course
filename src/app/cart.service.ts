import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[]=[];
  constructor(private http: HttpClient) { }

  addToCar(product?: Product){
    if(product)
      this.items.push(product);

      console.log(this.items);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices():Observable<any[]>{
    return this.http.get<any>('/assets/shipping.json')
  }
}
