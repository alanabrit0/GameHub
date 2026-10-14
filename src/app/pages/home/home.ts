import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo';
import { JogoCardComponent } from '../../components/jogo-card/jogo-card';
import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, JogoCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  destaques: Jogo[] = [];

  constructor(private jogoService: JogoService) {
    this.destaques = this.jogoService.listar().slice(0, 3);
  }

  get totalJogos(): number {
    return this.jogoService.totalJogos();
  }

  get totalGratuitos(): number {
    return this.jogoService.totalGratuitos();
  }
}