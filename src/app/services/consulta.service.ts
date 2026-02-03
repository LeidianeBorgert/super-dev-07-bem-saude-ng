import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaCriarRequestModel, ConsultaEditarRequestModel, ConsultaPesquisaResponseModel, ConsultaResponseModel } from '../models/consulta.model';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/primitives/di';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  
private httpClient = inject(HttpClient);

  getAll(): Observable<ConsultaResponseModel[]>{
    const url = `${environment.apiUrl}/consultas`;
    return this.httpClient.get<ConsultaResponseModel[]>(url);
  }

  create(form:ConsultaCriarRequestModel): Observable<ConsultaResponseModel>{
    const url = `${environment.apiUrl}/consultas`;
    return this.httpClient.post<ConsultaResponseModel>(url, form);
  }
  
  update(id: string, form:ConsultaEditarRequestModel): Observable<ConsultaResponseModel>{
    const url = `${environment.apiUrl}/consultas/${id}`;
    return this.httpClient.put<ConsultaResponseModel>(url, form);
  }

  getById(id: string): Observable<ConsultaPesquisaResponseModel>{
    const url = `${environment.apiUrl}/consultas/${id}`;
    return this.httpClient.get<ConsultaPesquisaResponseModel>(url);
  }

  delete(id:string):Observable<void>{
    const url = `${environment.apiUrl}/consultas/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
