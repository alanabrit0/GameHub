import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { JogosComponent } from './pages/jogos/jogos';
import { JogoDetalhesComponent } from './pages/jogo-detalhes/jogo-detalhes';
import { CadastrarJogoComponent } from './pages/cadastrar-jogo/cadastrar-jogo';
import { SobreComponent } from './pages/sobre/sobre';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'jogos/:id', component: JogoDetalhesComponent },
  { path: 'cadastrar', component: CadastrarJogoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: NaoEncontrado }
];