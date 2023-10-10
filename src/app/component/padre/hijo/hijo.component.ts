import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy{
  @Input() parametro: string;
  //para crear eventos personalizados se usa @Output, y se indica entre <> el tipo de dato que recibirán
  @Output() eventoMensaje = new EventEmitter<string>();
  @Output() eventoOcultar = new EventEmitter<boolean>();

  valorHijo: string;
  mostrarControl: boolean = false;
  myEventSubscription: Subscription;
  constructor(private eventoService: EventosService){
    this.parametro = "";
    this.valorHijo = "";   
    
    this.myEventSubscription = eventoService.cambioValor.subscribe((valor) => {
      this.mostrarControl = valor;
    });
  }

  ngOnDestroy(): void{
    this.eventoService.cambioValor.next(false);
    this.myEventSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  public btnRegresarRespuesta_Click(){
    //debugger;
    this.eventoMensaje.emit(this.valorHijo);
  }
  public btnMostrarControl_Click(){
    this.mostrarControl = false;
  }
  public btnRegresar_Click(){
    this.eventoOcultar.emit(false);
  }
  
}
