import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {


  categoryList:any;


  constructor(private categoryService:CategoryService){ }
  ngOnInit(): void {
     this.getAllCategory();
  }

  getProductByCategory(id:any) {
   console.log("id" +id);
   
    }
  getAllCategory(){

    this.categoryService.getAllCategory().subscribe((category:any)=>{
      this.categoryList = category;
      console.log(category);
    },(error:any)=>{
      console.log(error);
      
    })
  }

}
