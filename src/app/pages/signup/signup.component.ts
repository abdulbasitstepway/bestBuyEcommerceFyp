import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  loginForm: FormGroup | undefined;

  user:any;

signUp = this.formBuilder.group({
  username: '',
  email: '',
  password:''
});






  // hasSubmitted: boolean;

  // get username(){ return this.loginForm.get('username'); }
  // get password(){ return this.loginForm.get('password'); }

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) {
    // this.loginForm = this.fb.group({
    //   username : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
    //   password : ['',[Validators.required, Validators.minLength(6)]]
    // });
  }
  ngOnInit(): void { }

  onSubmit() {
    // Print form values to the console
    console.log('Form Values:', this.signUp.value.email);
    console.log('Form Values:', this.signUp.value.username);
    console.log('Form Values:', this.signUp.value.password);

    let obj ={
      name:this.signUp.value.username,
      email:this.signUp.value.email,
      password:this.signUp.value.password
    }
this.userService.signUpUser(obj).subscribe((response)=>{
  debugger
  this.user=response
  if(this.user){
    alert("SignUp Successfully")
    this.router.navigate(['login']);
    }else{
    alert(this.signUp.value.email+ " " +"are not registered")
  }
})

  }
  
        }
