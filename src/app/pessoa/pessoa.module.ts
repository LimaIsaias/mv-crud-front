import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';


@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    TableModule,
    PessoaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListagemPessoasComponent]
})
export class PessoaModule { }
