import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';
import { TemplatingComponent as tDemo } from './demo/templating/templating.component';
import { TemplatingComponent as tExo } from './exo/templating/templating.component';
import { SignalComponent } from './demo/signal/signal.component';
import { PokemonComponent } from './demo/pokemon/pokemon.component';
import { PokeComponent } from './exo/poke/poke.component';


export const routes: Routes = [
  {
    path : 'demo',
    component : DemoComponent,
    children : [{
      path : 'templating',
      component : tDemo
    },
    {
      path: 'signal',
      component : SignalComponent
    },
    {
      path : 'pokemon',
      component : PokemonComponent
    },
    {
      path : '**',
      redirectTo : 'templating'
    }
  ]
  },
  {
    path : 'exo',
    component : ExoComponent,
    children : [
      {
        path : 'templating',
        component : tExo
      },
      {
        path: 'poke',
        component : PokeComponent
      },
      {
        path : '**',
        redirectTo : 'templating'
      }
    ]
  }
];
