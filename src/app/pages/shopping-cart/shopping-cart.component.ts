import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {
  value1: any = 1;
  constructor(private router:Router){}
  click(){
    this.router.navigate(['/checkout']);
  }
}
