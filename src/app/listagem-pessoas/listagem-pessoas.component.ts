import { Component, OnInit } from '@angular/core';
import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  title = 'Listagem de Pessoas';
  filtro = new PessoaFiltro();
  pessoas = [];

  constructor(
    private PessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }
  
  ngOnInit() {
    this.title.setTitle('Listagem de Pessoas');
  }
  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
