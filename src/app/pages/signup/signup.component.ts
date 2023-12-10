import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  loginForm: FormGroup | undefined;
  // hasSubmitted: boolean;

  // get username(){ return this.loginForm.get('username'); }
  // get password(){ return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder) {
    // this.loginForm = this.fb.group({
    //   username : ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9\-]+$")]],
    //   password : ['',[Validators.required, Validators.minLength(6)]]
    // });
  }
  ngOnInit(): void { }

  onSubmit() {
    // this.hasSubmitted = true;
    //console.log(this.loginForm.value);
    // const token = this.authService.authUser(this.loginForm.value);
    // if (this.loginForm.valid) {
      // if(token){ //if user have some value it will check and validate
        // localStorage.setItem('token',token.username);
        // alertify.success('You have logged in successfully');
        // this.router.navigate(['/special']);
      }
      // else{ //if user is null or incorrect
      //   alert('Username or Password is wrong');
      // }
      
      // this.loginForm.reset();
      // this.hasSubmitted = false;
    }
    // else{
    //   alert('Kindly fill required fields');
    // }
  

// }
