import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutInterceptor } from './services/aut.interceptor';
//Components
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { TresComponent } from './component/tres/tres.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './component/padre/padre.component';
import { HijoComponent } from './component/padre/hijo/hijo.component';
import { PersonaComponent } from './component/persona/persona.component';
import { AgregarComponent } from './component/persona/agregar/agregar.component'; 
import { ModificarComponent } from './component/persona/modificar/modificar.component';
import { EliminarComponent } from './component/persona/eliminar/eliminar.component';
//Angular material
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ComunicacionComponent } from './component/comunicacion/comunicacion.component';
//Prime NG
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
// Forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UnoComponent,
    TresComponent,
    PadreComponent,
    HijoComponent,
    ComunicacionComponent,
    PersonaComponent,
    AgregarComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    ButtonModule,
    SplitterModule,
    TabViewModule,
    TableModule,
    DynamicDialogModule
  ],
  
  providers: [
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutInterceptor,
      multi: true
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
