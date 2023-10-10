import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private arregloPersonas: Persona[] = [];
  private personasSubject = new BehaviorSubject<Persona[]>([]);

  constructor() {
    //Crear una persona por lo menos en el constructor
    const p1 = new Persona(1,'NombreInicial', 'PaternoInicial', 'MaternoInicial', 25);
    const p2 = new Persona(2,'NombreInicial2', 'PaternoInicial2', 'MaternoInicial2', 30);
    const p3 = new Persona(3,'NombreInicial3', 'PaternoInicial3', 'MaternoInicial3', 30);
    const p4 = new Persona(4,'NombreInicial4', 'PaternoInicial4', 'MaternoInicial4', 30);
    const p5 = new Persona(5,'NombreInicial5', 'PaternoInicial5', 'MaternoInicial5', 30);
    const p6 = new Persona(6,'NombreInicial6', 'PaternoInicial6', 'MaternoInicial6', 30);
    this.arregloPersonas.push(p1,p2,p3,p4,p5,p6);

    this.personasSubject.next([...this.arregloPersonas]);
  }

  agregarPersona(persona: Persona) {
    this.arregloPersonas.push(persona);
    this.personasSubject.next([...this.arregloPersonas]);
  }

  modificarPersona(persona: Persona){
    //En cada iteración "personaB" será una variable que se estará iterando en el arreglo en busca del ID buscado
    const index = this.arregloPersonas.findIndex(personaB => personaB.id === persona.id);
    this.arregloPersonas[index] = persona;
    this.personasSubject.next([...this.arregloPersonas]);
  }

  getPersonaPorID(id: number){
    const index = this.arregloPersonas.findIndex(persona => persona.id === id);
    if (index !== -1)
      return this.arregloPersonas[index];
    else
      return null;
  }

  eliminarPersona(id: number){
    //En cada iteración "persona" será la variable, y se estará comparando su id con el del parámetro
    const index = this.arregloPersonas.findIndex(persona => persona.id === id);

    if (index !== -1) {
      this.arregloPersonas.splice(index, 1);
      this.personasSubject.next([...this.arregloPersonas]);
    }
  }

  obtenerPersonas() {
    return this.personasSubject.asObservable();
  }
}
