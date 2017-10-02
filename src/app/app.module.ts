import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { PlanetaComponent } from './planeta/planeta.component'
import { PlanetasService } from './planeta/planetas.service'

@NgModule({
  declarations: [
    AppComponent,
    PlanetaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
