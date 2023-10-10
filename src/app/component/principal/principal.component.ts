import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  titulo = 'Título desde el href';
  mostrarUno = true;
  tabSeleccionada: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      const tabToSelect = params['tab'];
      if (tabToSelect) {
        switch(tabToSelect){
          case 'uno':
            this.tabSeleccionada = 0;
            break;
          case 'dos':
            this.tabSeleccionada = 1;
            break;
          case 'tres':
            this.tabSeleccionada = 2;
            break;
          case 'persona':
            this.tabSeleccionada = 3;
            break;
          case 'padre':
            this.tabSeleccionada = 4;
            break;
          default:
            this.tabSeleccionada = 1;
            break;
        }
      }
    });
  }
}
