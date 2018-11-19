import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { CalendarModule } from 'primeng/calendar';
import {KeyFilterModule} from 'primeng/keyfilter';



@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    TableModule,
    PessoaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    KeyFilterModule,
  ],
  declarations: [ListagemPessoasComponent, CadastroPessoasComponent]
})
export class PessoaModule { }
