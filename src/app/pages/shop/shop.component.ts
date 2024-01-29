import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit{


productList:any;
searchName: string = '';
listCategory:any;
userId:any;
cart:any;
cartProduct:any;
categoryList:any;
  constructor(private productService: ProductsService,private categoryService:CategoryService){ }

  ngOnInit(): void {
    localStorage.setItem('userId',"1");
    localStorage.setItem('cartId',"4");
    this.getAllProducts();
    this.getAllCategory();
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
      console.log(product);
      
    },(error:any)=>{
      console.log(error);
      
    }
    )
    
  }
  
  addToCartClicked(prodId:any) {
    debugger
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
    } 
  // getAllCategory(){
  //   this.categoryService.getAllCategory().subscribe((category:any)=>{
  //     this.listCategory=category;
  //     console.log(this.listCategory);
      
  //   },(error:any)=>{
  //     console.log(error);
  //   })
  // }

  getAllProducts(){
    this.productService.getProduct().subscribe((product:any)=>{
      this.productList = product;
      console.log(product);
    },(error:any)=>{
      console.log(error);
      
    })
  }
//aa
  getSearchByProduct(name:any){
    if(this.searchName === ''){
      this.getAllProducts()
    }else{
      this.productService.getSearchProducts(name.value).subscribe(response=>{
        debugger
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
