import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { TresComponent } from './component/tres/tres.component';
import { PadreComponent } from './component/padre/padre.component';
//Persona
import { PersonaComponent } from './component/persona/persona.component';
import { AgregarComponent } from './component/persona/agregar/agregar.component';
//import { ModificarComponent } from './component/persona/modificar/modificar.component';
import { EliminarComponent } from './component/persona/eliminar/eliminar.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'ejemplo/uno', component: UnoComponent},
  {path: 'ejemplo/tres', component: TresComponent},
  {path: 'ejemplo/padre', component: PadreComponent},
  {path: 'ejemplo/persona', component: PersonaComponent},
  {path: 'persona/agregar', component: AgregarComponent},
  {path: 'persona/eliminar/:id', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
