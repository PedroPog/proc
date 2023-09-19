import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(
    private httpClient: HttpClient,
  ) { }

  consultaCep(cep:String){
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
    .pipe(
      first(),
      tap((dados: any) => console.log(dados))
    );
  }
}
