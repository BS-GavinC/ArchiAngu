import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templating',
  imports: [FormsModule],
  templateUrl: './templating.component.html',
  styleUrl: './templating.component.css'
})
export class TemplatingComponent {

  oneWayElement : string | undefined;

  twoWayElem : string = "Bonjour";

  transfert(){
    this.oneWayElement = this.twoWayElem
  }

}
