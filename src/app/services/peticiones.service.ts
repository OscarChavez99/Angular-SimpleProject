import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';
import { map } from 'rxjs';
import { Login } from '../models/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

    Url = environment.URL_Peticiones +"Peticiones/";

  constructor(private httpClient: HttpClient) { }

  public GetDatos(valor: string){
    //return this.httpClient.get<ResponseModel>(this.Url+"PeticionGet/"+ valor).pipe(map(data=>data));
    return this.httpClient.get<ResponseModel>(this.Url+"PeticionGet/"+ valor);
  }

  public ValidaUsuario(usuario: Login){
    return this.httpClient.post<ResponseModel>(this.Url+"PeticionPost", usuario);
  }

  public CambiarContraseña(usuario: Login){
    return this.httpClient.put<ResponseModel>(this.Url+"PeticionPut", usuario);
  }
  
}
