import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit{
  titulo?: string;
  numeros: number[] = [1,2,3,4];
  mostrar: boolean[] = [];
  columnas: string[] = ['a','o'];

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
    });
    this.mostrar = new Array(this.numeros.length).fill(false);
  }

  public btnMensaje_Click(valor: number, indice: number){
    alert("El valor es: " + valor + " y está en el índice: " + indice)
  }
  public btnModificar_Click(i: number){
    this.mostrar[i] = !this.mostrar[i];
  }
  //Evitar perder el foco en el for al momento de editar la tabla
  trackByFn(index: any, item: any){
    return index;
  }
  public btnEliminar_Click(index: number){
    var confirmar = window.confirm("¿Estás segur@ que deseas borrar este elemento?");
    if (confirmar)
      this.numeros.splice(index,1);
  }
}
