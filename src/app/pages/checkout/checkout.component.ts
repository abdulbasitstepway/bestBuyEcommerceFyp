import { Component } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId:any;
  products:any;
  value1: any = 1;
  cartProduct:any;
  total: number=0;
  countProduct:number=0;


  constructor(private productService: ProductsService,private orderDetailService:OrderDetailService){ }
  ngOnInit(): void {
    this.cartId=localStorage.getItem('cartId');
    this.getAllOrderDetailsProduct(this.cartId);
  }

getAllOrderDetailsProduct(cartId:any){
  
  this.productService.getOrderDetailByCartId(cartId).subscribe((response:any)=>{
    // this.cartProduct=response;
    console.log("aaa");
    
    this.products=response
    console.log(this.products);
    this.products.forEach((element: any) => {
      this.cartProduct=element.cartProductDTO.product
      console.log(element.cartProductDTO.quantity*element.cartProductDTO.amount);
      let totalAmount=element.cartProductDTO.quantity*element.cartProductDTO.amount
      this.total+=totalAmount
      this.countProduct++;
    });
    console.log(this.cartProduct);
    console.log(this.total);
    
    // this.products=this.products.filter(prod=>prod)
    
  })

}

delete(id: any) {
console.log(id);
this.orderDetailService.deleteOrderDetail(id).subscribe((response)=>{
  alert(response);
})


}
}
