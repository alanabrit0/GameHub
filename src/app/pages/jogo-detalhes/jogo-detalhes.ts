import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo';   
import { Jogo } from '../../models/jogo';             

@Component({
  selector: 'app-jogo-detalhes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './jogo-detalhes.html',
  styleUrls: ['./jogo-detalhes.css']
})
export class JogoDetalhesComponent implements OnInit {
  jogo: Jogo | undefined;

  constructor(
    private route: ActivatedRoute,
    private jogoService: JogoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jogo = this.jogoService.buscarPorId(id);
  }
}