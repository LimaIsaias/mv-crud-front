import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../models/pessoa';
import { Page } from '../models/page';
import { PessoaService, PessoaFiltro } from '../pessoa/pessoa.service';


@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  title = 'Listagem de Pessoas';
  pessoas = [];
  pessoaForm: FormGroup;
  closeResult: string;
  page: Page<Pessoa> = new Page();
  pessoaSelecionada: Pessoa;


  @Input() currentPage;
  cpfPattern = Validators.pattern('^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$');
  numberPattern = Validators.pattern(/^[0-9]*$/);
  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    // private modalService: NgbModal,
    private route: ActivatedRoute,
    private zone: NgZone
  ) {
    this.pessoaForm = this.fb.group({
      nome: [''],
      cpf: ['', [this.numberPattern, Validators.minLength(11), Validators.maxLength(11)]]
    });
    this.currentPage = 1;
  } ngOnInit() { }
  pesquisar(numeroPagina?: number) {
    const pessoaFiltro: PessoaFiltro = this.pessoaForm.value;
    if (numeroPagina) {
      pessoaFiltro.pagina = numeroPagina - 1;
      this.currentPage = numeroPagina;
    } else {
      pessoaFiltro.pagina = this.currentPage - 1;
    }
    pessoaFiltro.itensPorPagina = 20;
    this.pessoaService.pesquisar(pessoaFiltro)
      .subscribe((data) => {
        this.page = data;
      });
  }

  remover(pessoa: Pessoa): void {
    this.zone.run(() => {
      this.pessoaService.remover(pessoa.id)
        .subscribe(() => this.pesquisar());
    });
  }
  open(content, pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
    //    this.modalService.open(content);
  }

}
