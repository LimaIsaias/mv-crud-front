import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Page } from '../models/page';
import { environment } from 'src/environments/environment';

export class PessoaFiltro {
  pagina = 0;
  itensPorPagina = 20;
  nome: string;
  cpf: string;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaUrl: string;

  constructor(private http: HttpClient) {
    this.pessoaUrl = `${environment.api}/pessoas`;

  }

  pesquisar(pessoaFiltro: PessoaFiltro): Observable<Page<Pessoa>> {
    let params = new HttpParams();
    if (pessoaFiltro && pessoaFiltro.pagina) {
      params = params
        .set('page', pessoaFiltro.pagina.toString())
        .set('size', pessoaFiltro.itensPorPagina.toString());
    }
    if (pessoaFiltro.nome) {
      params = params.set('nome', pessoaFiltro.nome);
    }
    if (pessoaFiltro.cpf) {
      params = params.set('cpf', pessoaFiltro.cpf);
    }
    console.log(pessoaFiltro);
    return this.http.get<Page<Pessoa>>(`${this.pessoaUrl}`, { params })
      .pipe(map(data => data));
  }

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.pessoaUrl}`, pessoa)
      .pipe(catchError(this.handleError));
  }

  remover(id: number): Observable<{}> {
    return this.http.delete(`${this.pessoaUrl}/${id}`)
      .pipe(
        map(pessoaSalva => pessoaSalva),
        catchError(this.handleError)
      );
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoaUrl}/${pessoa.id}`, pessoa)
      .pipe(map(data => data));
  }

  pesquisarPorId(id: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.pessoaUrl}/${id}`)
      .pipe(
        map(data => data),
        catchError(this.handleError)
      );
  }

  /**
   * pegue da documentacao
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
