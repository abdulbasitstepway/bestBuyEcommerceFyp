import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit{
productList:any;
searchName: string = '';

  constructor(private productService: ProductsService){ }

  ngOnInit(): void {
    
    this.getAllProducts();
  }

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
