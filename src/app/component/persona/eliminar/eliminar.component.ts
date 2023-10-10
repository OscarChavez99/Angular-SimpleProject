import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  
  id: number = -1;

  constructor(private route: ActivatedRoute, private router: Router, private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });
  }

  eliminarPersona(){
    this.personaService.eliminarPersona(this.id);
    //Regresar al listado después de la eliminación
    //this.router.navigate(['']);
    this.router.navigate([''], { queryParams: { tab: 'persona' } });
  }
}
