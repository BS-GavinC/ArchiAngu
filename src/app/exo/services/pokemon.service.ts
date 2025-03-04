import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../poke/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _httpClient : HttpClient) { }

  getRandomPokemon() : Observable<Pokemon>{
    let randomId : number = Math.floor(Math.random() * 150) + 1
    return this._httpClient.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + randomId)
  }
}
