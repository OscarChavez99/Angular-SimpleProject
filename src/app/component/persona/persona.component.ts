import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ModificarComponent } from './modificar/modificar.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [DialogService]
})
export class PersonaComponent {
  arregloPersonas: Persona[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private personaService: PersonaService,
    public dialogService: DialogService){
    this.personaService.obtenerPersonas().subscribe((personas) => {
      this.arregloPersonas = personas;
    });
  }

  ngOnInit(): void {
    
  }

  show(id: number){
    const ref = this.dialogService.open(ModificarComponent, {
      data: {
        id: id
      },
      //Título y tamaño del PopUp
      header: 'Modificar persona',
      width: '70%'
  });
  }

  navegarAEliminar(id: number) {
    this.router.navigate(['persona/eliminar', id]); // Suponiendo que tienes un campo "id" en tu objeto persona
  }
  
}
