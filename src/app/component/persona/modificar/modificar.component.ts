import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Persona } from 'src/app/models/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-agregar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{
  modificarForm: FormGroup = new FormGroup({});
  id: number = -1;

  constructor (private formBuilder: FormBuilder, private personaService: PersonaService, 
    private route: ActivatedRoute, private router: Router, public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });

    //Obtener los datos de la persona para el autocompletado
    this.id = this.config.data.id;
    let persona = this.personaService.getPersonaPorID(this.id);


    this.modificarForm = this.formBuilder.group({
      nombre: [persona?.nombre, Validators.required],
      apellidoPaterno: [persona?.apellidoPaterno, Validators.required],
      apellidoMaterno: [persona?.apellidoMaterno, Validators.required],
      edad: [persona?.edad, Validators.required],
    });
  }

  modificarPersona() {
    
    let nombre = '';
    let apellidoPaterno = '';
    let apellidoMaterno = '';
    let edad = '';

    const nombreControl = this.modificarForm.get('nombre');
    if (nombreControl) {
      nombre = nombreControl.value;
    }

    const apellidoPaternoControl = this.modificarForm.get('apellidoPaterno');
    if (apellidoPaternoControl) {
      apellidoPaterno = apellidoPaternoControl.value;
    }

    const apellidoMaternoControl = this.modificarForm.get('apellidoMaterno');
    if (apellidoMaternoControl) {
      apellidoMaterno = apellidoMaternoControl.value;
    }

    const edadControl = this.modificarForm.get('edad');
    if (edadControl) {
      edad = edadControl.value;
    }

    if (this.modificarForm.valid) { //Se modificará correctamente
      let persona = new Persona(this.id, nombre, apellidoPaterno, apellidoMaterno, parseInt(edad));
      this.personaService.modificarPersona(persona);
      //this.modificarForm.reset(); //Limpiar el form 
      this.ref.close(); //Ref definido en constructor
    }
  }
}
