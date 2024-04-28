import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header-head',
  templateUrl: './header-head.component.html',
  styleUrls: ['./header-head.component.css']
})
export class HeaderHeadComponent {
  currencyId:any;
  currency:any;
  storageCurrency:any;
  currencyObj:any;
  userId:any;
  isSignInShow:boolean=false;
  isLogOutBtnShow: boolean=false;
getCurrencyById(id:any,currencyCode:any) {
    this.currency=currencyCode;
    this.currencyId=localStorage.setItem('currencyId',id);
    window.location.reload();

  }
isSignInShowBtn(userId:any){
  if(!userId){
    this.isSignInShow=true;
  }else{
    this.isLogOutBtnShow=true;
  }
}

  currencyList:any;

  ngOnInit(): void {
    this.storageCurrency= localStorage.getItem('currencyId');
    this.userId=localStorage.getItem('userId');
    this.getAllCurrency();
    this.isSignInShowBtn(this.userId);
    
  }

constructor(private currencyService:CurrencyService){}

getAllCurrency(){
    this.currencyService.getCurrency().subscribe((response) => {
      this.currencyList = response;
      if (this.storageCurrency != null) {
        this.currencyObj = this.currencyList.find((element: { id: any; }) => element.id == this.storageCurrency);
        if (this.currencyObj) {
          this.currency = this.currencyObj.currencyCode;
        } else {
          // Handle the case when no currency object is found for the given ID
          this.currency = "USD";
        }
      } else {
        this.currency = "USD";
      }
    });
}

logout(){
  console.log("logout");
  
 localStorage.clear();
}
}
