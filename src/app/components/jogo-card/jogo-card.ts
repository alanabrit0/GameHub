import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo';   

@Component({
  selector: 'app-jogo-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jogo-card.html',
  styleUrls: ['./jogo-card.css']
})
export class JogoCardComponent {
  @Input() jogo!: Jogo;
}