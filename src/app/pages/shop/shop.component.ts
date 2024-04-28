import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit{
nextPage() {
  this.currentPage++;
  this.getAllProducts();
}
previousPage() {
   if (this.currentPage > 1) {
  this.currentPage--;
  this.getAllProducts();
}
}


productList:any;
searchName: string = '';
listCategory:any;
userId:any;
cart:any;
cartProduct:any;
categoryList:any;
currentPage = 1;
  pageSize = 6;
  constructor(private productService: ProductsService,private categoryService:CategoryService,
    private router:Router,private currencyService:CurrencyService){ }

    currencyRate:any;
    currencyId:any;
  ngOnInit(): void {
    // localStorage.setItem('userId',"1");
    // localStorage.setItem('cartId',"4");
   this.currencyId= localStorage.getItem('currencyId');
   this.getCurrencyConversionRate();
    this.getAllProducts();
    this.getAllCategory();
  }

  getCurrencyConversionRate(){
    if(this.currencyId){
    this.currencyService.getConversionCurrency(this.currencyId).subscribe((response)=>{
this.currencyRate=response;
console.log(this.currencyRate.conversionCurrency.conversionRate+"currencyRate")
    
    })
  }
  }

  getAllCategory(){

    this.categoryService.getAllCategory().subscribe((category:any)=>{
      this.categoryList = category;
      console.log(category);
    },(error:any)=>{
      console.log(error);
      
    })
  }

  getProductByCategory(categoryId: any) {
    console.log("abc"+ categoryId);
    this.productService.getProductBycategory(categoryId).subscribe((product:any)=>{
      this.productList = product;
      console.log("currencyID");
     
      console.log(product);
      
    },(error:any)=>{
      console.log(error);
      
    }
    )
    
  }
  
  addToCartClicked(prodId:any) {
    debugger
    if(localStorage.getItem('userId')!=null){
    if(localStorage.getItem('cartId')==null){
     this.userId= localStorage.getItem('userId');
     let obj={
      createdBy:this.userId
     }
      this.productService.AddToCart(obj).subscribe((response:any)=>{
        console.log(response );
        
        this.cart=response;
        localStorage.setItem('cartId',this.cart.id);
      })
      let cartProductObj={
        quantity: 1,
        cartId: this.cart,
        productId:prodId
      }
      this.productService.AddToCartProduct(cartProductObj).subscribe((response:any)=>{
        this.cartProduct=response;
      })
    console.log("ssd");
    }else{
      this.cart=localStorage.getItem('cartId');
      const cartProductObj={
        // amount:this.cart.product.amount,
        quantity: 1,
        cartId: this.cart,
        productId:prodId
      }
      this.productService.AddToCartProduct(cartProductObj).subscribe((response:any)=>{
        this.cartProduct=response;
      })
    }
  }else{
    alert("Please Login")
    this.router.navigate(['login']);
  }
    } 
 

    getAllProducts() {
      this.productService.getProductsByPgSize(this.currentPage,this.pageSize).subscribe((products: any) => {
        this.productList = products;
        // console.log(products);
        
        if (this.currencyId && this.currencyRate) {
          this.productList = this.productList.map((product: any) => {
            console.log("Original price:", product.price);
            console.log("Conversion rate:", this.currencyRate.conversionRate);
            
            product.price = product.price * this.currencyRate.conversionCurrency.conversionRate;
            
            console.log("Updated price:", product.price);
            
            return product;
          });
        }
        // console.log(this.productList.id);
        
      }, (error: any) => {
        console.log(error);
      });
    }
    
//aa
  getSearchByProduct(name:any){
    if(this.searchName === ''){
      this.getAllProducts()
    }else{
      this.productService.getSearchProducts(name.value).subscribe(response=>{
        console.log(response);
        // this.searchName = JSON.stringify(response)
           this.productList=response;
           console.log(this.productList + "search-------");
           
        },(error:any)=>{
          console.log(error);
        })
    }
    
  }

}
