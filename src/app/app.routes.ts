import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';

export const routes: Routes = [
  {
    path : 'demo',
    component : DemoComponent
  },
  {
    path : 'exo',
    component : ExoComponent
  }
];
