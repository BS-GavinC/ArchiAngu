import { Component, inject, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  imports: [FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  private _pokeService : PokeService = inject(PokeService)

  pokemonId : number = 25;

  pokemonName : string | undefined

  ngOnInit(): void {

  }

  seekPokemon(){
    this._pokeService.getPokemonById(this.pokemonId).subscribe({
      next : (pokemon) => {
        this.pokemonName = pokemon.name;
      },
      error : (error) => {
        console.error(error.error)
        this.pokemonName = error.error
      }
    })
  }
}
