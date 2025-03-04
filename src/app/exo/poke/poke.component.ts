import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from './interfaces/pokemon.interface';

@Component({
  selector: 'app-poke',
  imports: [],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent{

  private _pokemonService = inject(PokemonService)

  monPokemon : Pokemon | undefined

  newPokemon(){
    this._pokemonService.getRandomPokemon().subscribe({
      next : (poke) => {
        this.monPokemon = poke
      }
    })
  }

}
