import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.start();
    console.log(getProducts());
  }

  title = 'my-store';

  start(){
    console.log('start my-store');
  }
}


function getProducts(){
  return products;
}

