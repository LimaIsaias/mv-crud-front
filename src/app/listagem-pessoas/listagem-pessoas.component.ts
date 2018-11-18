import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent {
  title = 'Listagem de Pessoas';
  pessoas = [
    { id: 1, nome: 'ISAIAS DE LIMA COELHO', email: 'coelholimaisaias@gmail.com', cpf: '04442332371', idade: 23, quantidadeTelefones: 1 },
    { id: 2, nome: 'PAULA ELLEN MARINHO LEÃO', email: 'ellen@gmail.com', cpf: '04423284571', idade: 20, quantidadeTelefones: 2 },
    { id: 3, nome: 'ANA ISIS LEÃO COELHO', email: 'isis@gmail.com', cpf: '05595632477', idade: 1, quantidadeTelefones: 0 }
  ];
}
