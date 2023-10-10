import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { Login } from 'src/app/models/login/login.model';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  valorGet: string;
  valor: string;
  contrasenia: string;
  mostrarHijo: boolean;

  constructor(private peticionesService: PeticionesService){
    this.valorGet = "";
    this.valor = ""; //Esta variable almacena lo que el usuario ingrese desde el input de "padre.component.html"
    this.contrasenia = "";
    this.mostrarHijo = false;
  }

  ngOnInit(): void{
  }

  public btnActualizar_Click(){
    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;
    this.peticionesService.CambiarContraseña(usuario).subscribe({
      next:(dato) => {
        if(dato.ok) {
          alert("La contraseña se cambió a: "+ (dato.datos as Login).contraseña);
        }
        else {
          alert(dato.mensaje);
        }
      },
      error:(error) => {
        console.log("error: ", error.message);
        alert("Error comunicación: "+ error.message);
      }
    });
  }

  public peticionGet(){
    //Obtener el usuario de local storage
    let usuarioStr = localStorage.getItem("usuario");

    if (usuarioStr){
      //Convertir a objeto tipo Login
      let usu = JSON.parse(usuarioStr) as Login ;
      console.log("usuario recuperado: ", usu);
    }

    alert("Mi valor: " + usuarioStr);

    this.peticionesService.GetDatos(this.valorGet).subscribe({
      next:(dato) => {
        if (dato.ok){
          alert("Respuesta: " + dato.datos);
        } 
      },
      error:(error)=>{
        console.log("Error: "+error);
      }
    });
    console.log("continua");
  }

  public btnMostrar_Click(){

    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;

    this.peticionesService.ValidaUsuario(usuario).subscribe({
      next:(dato)=>{
        if(dato.ok){
          debugger;
          alert("usuario válido");
          this.mostrarHijo = true;
          //Convertir usuario a cadena (JSON)
          let usuarioStr = JSON.stringify(dato.datos as Login);
          localStorage.setItem("usuario", usuarioStr);
          console.log("datos de respuesta: ", (dato.datos as Login));
        }
        else {
          alert(dato.mensaje);
        }
      },
      error: (error) => {}
    });
  }

  public eventoRecepcionDato(valorRecepcion: string){
    alert("Valor recibido: "+ valorRecepcion);
  }

  public eventoOcultarHijo(mostrar: boolean){
    this.mostrarHijo = mostrar;
  }
}
