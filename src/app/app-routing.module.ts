import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';

const routes: Routes = [
  { path: '', component: ApresentacaoComponent},
  { path: 'projetos', component: ProjetosComponent},
  { path: 'qualificacoes', component: QualificacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
