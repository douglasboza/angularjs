import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyService } from './my.service';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ComplementarComponent } from './complementar/complementar.component';
import { SemestreComponent } from './semestre/semestre.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DisciplinaComponent,
    ComplementarComponent,
    SemestreComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyService, MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
