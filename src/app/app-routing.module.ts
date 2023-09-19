import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VerifyEmailComponent } from './util/verify-email/verify-email.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'formulario',component: FormularioComponent},
    ]
  },
//Utilitalios
  {path:'verify-email',component: VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
