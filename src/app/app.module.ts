import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { GrupoCartaComponent } from './grupo-carta/grupo-carta.component';
import { GrupoQualificacaoComponent } from './grupo-qualificacao/grupo-qualificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    ProjetosComponent,
    QualificacoesComponent,
    GrupoCartaComponent,
    GrupoQualificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
