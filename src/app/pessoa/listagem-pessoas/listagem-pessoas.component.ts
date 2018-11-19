import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { Page } from 'src/app/models/page';
import { PessoaService, PessoaFiltro } from '../pessoa.service';


@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  pessoaForm: FormGroup;
  title = 'Listagem de Pessoas';
  closeResult: string;
  pessoas: Pessoa[];
  page: Page<Pessoa> = new Page();
  pessoaSelecionada: Pessoa;


  @Input() currentPage;
  cpfPattern = Validators.pattern('^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$');
  numberPattern = Validators.pattern(/^[0-9]*$/);
  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private zone: NgZone
  ) {
    this.pessoaForm = this.fb.group({
      nome: [''],
      cpf: ['', [this.numberPattern, Validators.minLength(11), Validators.maxLength(11)]]
    });
    this.currentPage = 1;
  } ngOnInit() {
    if (this.route.snapshot.params && this.route.snapshot.params.searchAll) {
      this.pesquisar();
    } else if (this.route.snapshot.params
      && this.route.snapshot.params.nome
      && this.route.snapshot.params.cpf
    ) {
      this.pessoaForm.get('nome').setValue(this.route.snapshot.params.nome);
      this.pessoaForm.get('cpf').setValue(this.route.snapshot.params.cpf);
      this.pesquisar();
    }
  }
  pesquisar(numeroPagina?: number) {
    const pessoaFiltro: PessoaFiltro = this.pessoaForm.value;
    if (numeroPagina) {
      pessoaFiltro.pagina = numeroPagina - 1;
      this.currentPage = numeroPagina;
    } else {
      pessoaFiltro.pagina = this.currentPage - 1;
    }
    pessoaFiltro.itensPorPagina = 5;
    this.pessoaService.pesquisar(pessoaFiltro)
      .subscribe((data) => {
        this.page = data;
        this.pessoas = data.content;
      });
  }

  remover(pessoa: Pessoa): void {
    this.zone.run(() => {
      this.pessoaService.remover(pessoa.id)
        .subscribe(() => this.pesquisar());
    });
  }

}
