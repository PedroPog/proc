import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password)
      .then((userCredential)=>{
        if (userCredential.user?.emailVerified === true) {
          this.router.navigate(['/formulario']);
        } else {
          this.router.navigate(['/verify-email']);
        }
      })
      .catch((error)=>{
        this.mensagemSnack('Email e Senha invalido');
        this.router.navigate(['/login']);
    })
  }
  mensagemSnack(message: string){
    this.snackBar.open(message, 'Ok');
  }
}
