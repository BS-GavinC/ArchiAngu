import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _httpClient : HttpClient = inject(HttpClient)

  getPokemonById(id : number) : Observable<any>{
    return this._httpClient.get("https://pokeapi.co/api/v2/pokemon/" + id)
  }
}
