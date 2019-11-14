import { Component, Input } from '@angular/core';
//import { Product } from './../models/product';
//import { ShoppingCartService } from '../services/shopping-cart.service';
//import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent{

  constructor() { }

  addToCart() {
    ///this.cartService.addToCart(this.product);
}

}
