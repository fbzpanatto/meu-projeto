import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  #API = environment.API
  #httpCliente = inject(HttpClient)

  getData(resource: string) {

    const url = this.#API + resource

    return this.#httpCliente.get(url)

  }
}