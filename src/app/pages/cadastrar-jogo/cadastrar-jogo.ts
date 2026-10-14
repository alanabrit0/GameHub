import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo';  
import { Jogo } from '../../models/jogo';            

@Component({
  selector: 'app-cadastrar-jogo',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-jogo.html',
  styleUrls: ['./cadastrar-jogo.css']
})
export class CadastrarJogoComponent {
  jogo: Jogo = {
    id: 0,
    nome: '',
    descricao: '',
    categoria: '',
    preco: 0,
    avaliacao: 0,
    imagem: '',
    disponivel: true
  };

  mensagem: string = '';
  erro: string = '';

  constructor(private jogoService: JogoService, private router: Router) {}

  salvar(): void {
    this.erro = '';
    this.mensagem = '';

    if (!this.jogo.nome || this.jogo.nome.trim() === '') {
      this.erro = 'O nome do jogo é obrigatório.';
      return;
    }
    if (this.jogo.preco < 0) {
      this.erro = 'O preço não pode ser negativo.';
      return;
    }
    if (this.jogo.avaliacao < 0 || this.jogo.avaliacao > 5) {
      this.erro = 'A avaliação deve estar entre 0 e 5.';
      return;
    }

    const novoId = this.jogoService.totalJogos() + 1;
    const novoJogo: Jogo = {
      ...this.jogo,
      id: novoId,
      imagem: this.jogo.imagem || `https://picsum.photos/seed/jogo${novoId}/400/300`
    };

    this.jogoService.adicionar(novoJogo);
    this.mensagem = `Jogo "${novoJogo.nome}" cadastrado com sucesso!`;
  }

  irParaCatalogo(): void {
    this.router.navigate(['/jogos']);
  }
}