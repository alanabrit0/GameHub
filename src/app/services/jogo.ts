import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';;

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogos: Jogo[] = [
    {
      id: 1,
      nome: 'Minecraft',
      descricao: 'Jogo de construção e sobrevivência em mundo aberto com blocos infinitos.',
      categoria: 'Sandbox',
      preco: 0,
      avaliacao: 4.8,
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png',
      disponivel: true
    },
    {
      id: 2,
      nome: 'Free Fire',
      descricao: 'Battle royale mobile com partidas rápidas e personagens únicos.',
      categoria: 'Battle Royale',
      preco: 0,
      avaliacao: 4.2,
      imagem: 'https://static.wikia.nocookie.net/garenafreefire/images/6/6f/Free_Fire_Play_Store_icon.png/revision/latest?cb=20240901011620&path-prefix=pt-br',
      disponivel: true
    },
    {
      id: 3,
      nome: 'Fortnite',
      descricao: 'Battle royale com construção, eventos ao vivo e modos criativos.',
      categoria: 'Battle Royale',
      preco: 0,
      avaliacao: 4.5,
      imagem: 'https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmt14h2ardvpq07o76t76zt0m',
      disponivel: false
    },
    {
      id: 4,
      nome: 'Clash Royale',
      descricao: 'Jogo de estratégia em tempo real com cartas e batalhas de arena.',
      categoria: 'Estratégia',
      preco: 0,
      avaliacao: 4.1,
      imagem: 'https://yt3.googleusercontent.com/Pj9SLzbMxgdbgFSA5MgfTZXjnoRtAj5qUGP8ubjf8AEJpy2nzWLR9Ik__iwQa44bPdvNw5jv5A=s900-c-k-c0x00ffffff-no-rj',
      disponivel: true
    },
    {
      id: 5,
      nome: 'Call of Duty',
      descricao: 'FPS de guerra com campanhas intensas e multiplayer competitivo.',
      categoria: 'FPS',
      preco: 199.9,
      avaliacao: 4.7,
      imagem: 'https://image.api.playstation.com/vulcan/img/cfn/11307mWaEjTEJ0S9Mvb64cBPBluyR6_ZLrGrDyjnj8U50MVUD4vvRZ7vT915N8GwntDoRJosrxIcYOjlPIkLtqqH_IQI4MlI.png',
      disponivel: true
    },
    {
      id: 6,
      nome: 'Subway Surfers',
      descricao: 'Corrida infinita desviando de obstáculos e coletando moedas.',
      categoria: 'Corrida',
      preco: 0,
      avaliacao: 3.9,
      imagem: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/1c920b9279c2bedec567c1b58129ae8f/subway-surfers-logo.png',
      disponivel: true
    },
    {
      id: 7,
      nome: 'The Legend of Zelda',
      descricao: 'Aventura épica em mundo aberto com exploração e puzzles.',
      categoria: 'Aventura',
      preco: 299.9,
      avaliacao: 4.9,
      imagem: 'https://media.wired.com/photos/645d15509a01d944fee35de1/3:2/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg',
      disponivel: true
    },
    {
      id: 8,
      nome: 'FIFA 24',
      descricao: 'Simulador de futebol com times, ligas e jogadores licenciados.',
      categoria: 'Esporte',
      preco: 249.9,
      avaliacao: 4.3,
      imagem: 'https://pbs.twimg.com/media/HT4apacXUAAlOS7?format=webp&name=large',
      disponivel: false
    }
  ];

  listar(): Jogo[] {
    return this.jogos;
  }

  buscarPorId(id: number): Jogo | undefined {
    return this.jogos.find(j => j.id === id);
  }

  adicionar(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  filtrarPorCategoria(categoria: string): Jogo[] {
    if (!categoria) return this.jogos;
    return this.jogos.filter(j => j.categoria.toLowerCase() === categoria.toLowerCase());
  }

  buscarPorNome(nome: string): Jogo[] {
    if (!nome) return this.jogos;
    return this.jogos.filter(j => j.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  totalJogos(): number {
    return this.jogos.length;
  }

  totalGratuitos(): number {
    return this.jogos.filter(j => j.preco === 0).length;
  }

  listarCategorias(): string[] {
    return [...new Set(this.jogos.map(j => j.categoria))];
  }
}