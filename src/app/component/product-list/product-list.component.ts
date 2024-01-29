import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    productList:any;


    constructor(private productService: ProductsService,private categoryService:CategoryService){ }
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

}
