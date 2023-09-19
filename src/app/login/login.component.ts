import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl<string>("", {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
      ],
    }),
    senha: new FormControl<string>("", {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(6),
      ],
    }),
  })

  constructor(
    private service: AuthService,
  ){}

  login(){
    if(this.formLogin.invalid){
      return;
    }
    const { email, senha } = this.formLogin.value;
    this.service.login(email,senha);
  }
}
