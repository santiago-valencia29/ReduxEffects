import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//conect service http
import { HttpClientModule } from "@angular/common/http";


//NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from './store/app.reducer';
import { effectsArr } from './store/effects/index';

//rutas
import { AppRoutingModule } from './app-routing.module';

//enviroment
import { environment } from '../environments/environment';


//modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArr),
    StoreDevtoolsModule.instrument({
    maxAge:25,
    logOnly:environment.production,
    }),
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
