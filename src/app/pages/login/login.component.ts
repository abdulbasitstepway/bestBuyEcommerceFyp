import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

user:any;

  signin = this.formBuilder.group({
    email: '',
    password:''
  });

  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private  router:Router){}


  ngOnInit(): void { }

  login() {
    // Print form values to the console
    console.log('Form Values:', this.signin.value.email);
    console.log('Form Values:', this.signin.value.password);

    let obj ={
      email:this.signin.value.email,
      password:this.signin.value.password
    }
this.userService.login(obj).subscribe((response)=>{
  debugger
  this.user=response
  localStorage.setItem("userId",this.user.id)
  if(this.user){
    alert("Login Successfully")
    this.router.navigate(['home']);
    }else{
    alert(this.signin.value.email+ " " +"is Invalid")
  }
})

  }
}
