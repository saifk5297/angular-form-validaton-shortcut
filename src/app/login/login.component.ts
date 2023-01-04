import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(
		public fb: FormBuilder,
    public router:Router
	) { }
  ngOnInit(): void {
    this.createForm()
    
  }
  createForm(){
		this.loginForm = this.fb.group({
			email: new FormControl('', [Validators.required, Validators.email ]),
			password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
		})
	}
	get email() { return this.loginForm.get('email'); }
	get password() { return this.loginForm.get('password'); }
  

  submit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return;
    }
    console.log(this.loginForm.value);
    this.router.navigate(['home'])
    
  }

}
