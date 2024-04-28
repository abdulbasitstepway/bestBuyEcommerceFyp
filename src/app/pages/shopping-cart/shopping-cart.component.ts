import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {




// updateQuantity(product: any, newQuantity: number) {
// throw new Error('Method not implemented.');
// }

  products:any;
  cartId:any;
  value1: any = 1;
  total:any;
  cartProducts:any=[]
  constructor(private router:Router,private productService:ProductsService){}

  selectedProducts: any[] = [];

  ngOnInit(): void {
    // localStorage.setItem('cartId',"4");
    // localStorage.setItem('userId',"1");
    
    
    this.getAllCartProducts();
  }

  click(){
    let listOfObjects = this.products.map((product: { id: any; quantity: any; cartId: any; productId: any; }) => ({
      id: product.id,
      quantity: product.quantity,
      cartId: product.cartId,
      productId: product.productId
    }));
    debugger
      this.productService.updateCartProduct(listOfObjects).subscribe((response:any)=>{
          this.cartProducts=response;
      })
      console.log(this.cartProducts);
      
      if(this.cartProducts!=null){
        //orderdetail save
      }

    this.router.navigate(['/checkout']);
  }


  // incrementQuantity(quantity:any,prodId:any) {
  //   console.log(quantity+" "+prodId.product.name);
  //   console.log(this.products);
    
  //   // let product=this.products.filter((_pro: any)=>_pro.product.id===prodId.product.id)
  //   // console.log(product.name +"product");
    
  // }

  getAllCartProducts(){
this.cartId=localStorage.getItem('cartId');
console.log("abc");
this.productService.getAllCartProduct(this.cartId).subscribe((response:any)=>{
this.products=response;
this.total=this.calculateTotalAmount(this.products);
console.log(this.total);

console.log(this.products);

  })
}

private calculateTotalAmount(products: any[]): number {
  let totalAmount = 0;

  for (const product of products) {
    totalAmount += product.amount * product.quantity;
  }

  return totalAmount;
}

}
