import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent implements OnInit{

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
  }

  public btnMostrarControl_Click(){
    this.eventoService.cambioValor.next(true);
  }
}
