import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId=Number(routeParams.get('productId'));

    this.product = products.find(p=>p.id===productId);
    console.log(this.product);
  }

  addToCart(product: Product){
    this.cartService.addToCar(this.product);
    alert('Your product has been added to the cart!')
  }

}
