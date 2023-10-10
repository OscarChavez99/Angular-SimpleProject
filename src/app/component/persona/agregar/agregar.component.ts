import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  agregarForm: FormGroup = new FormGroup({});

  constructor (private formBuilder: FormBuilder, private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.agregarForm = this.formBuilder.group({
      id: ['', Validators.required], 
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      edad: ['', Validators.required],
    });
  }

  agregarPersona() {
    
    let id = '';
    let nombre = '';
    let apellidoPaterno = '';
    let apellidoMaterno = '';
    let edad = '';

    const idControl = this.agregarForm.get('id');
    if (idControl) {
      id = idControl.value;
    }

    const nombreControl = this.agregarForm.get('nombre');
    if (nombreControl) {
      nombre = nombreControl.value;
    }

    const apellidoPaternoControl = this.agregarForm.get('apellidoPaterno');
    if (apellidoPaternoControl) {
      apellidoPaterno = apellidoPaternoControl.value;
    }

    const apellidoMaternoControl = this.agregarForm.get('apellidoMaterno');
    if (apellidoMaternoControl) {
      apellidoMaterno = apellidoMaternoControl.value;
    }

    const edadControl = this.agregarForm.get('edad');
    if (edadControl) {
      edad = edadControl.value;
    }

    if (this.agregarForm.valid) {
      let persona = new Persona(parseInt(id), nombre, apellidoPaterno, apellidoMaterno, parseInt(edad));
      this.personaService.agregarPersona(persona);
      this.agregarForm.reset();
    }
  }
}
