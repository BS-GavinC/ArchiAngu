import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';
import { TemplatingComponent } from './demo/templating/templating.component';

export const routes: Routes = [
  {
    path : 'demo',
    component : DemoComponent,
    children : [{
      path : 'templating',
      component : TemplatingComponent
    }]
  },
  {
    path : 'exo',
    component : ExoComponent
  }
];
