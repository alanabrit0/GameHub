import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JogoService } from '../../services/jogo';   
import { JogoCardComponent } from '../../components/jogo-card/jogo-card';
import { Jogo } from '../../models/jogo';             

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [FormsModule, JogoCardComponent],
  templateUrl: './jogos.html',
  styleUrls: ['./jogos.css']
})
export class JogosComponent {
  busca: string = '';
  categoriaSelecionada: string = '';
  categorias: string[] = [];

  constructor(private jogoService: JogoService) {
    this.categorias = this.jogoService.listarCategorias();
  }

  get jogosFiltrados(): Jogo[] {
    let resultado = this.jogoService.listar();
    if (this.busca) {
      resultado = resultado.filter((j: Jogo) =>      
        j.nome.toLowerCase().includes(this.busca.toLowerCase())
      );
    }
    if (this.categoriaSelecionada) {
      resultado = resultado.filter((j: Jogo) =>     
        j.categoria === this.categoriaSelecionada
      );
    }
    return resultado;
  }
}