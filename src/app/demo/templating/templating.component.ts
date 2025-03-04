import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templating',
  imports: [FormsModule],
  templateUrl: './templating.component.html',
  styleUrl: './templating.component.css'
})
export class TemplatingComponent {

  oneWayProp : string = "Bonjooooour"

  twoWayBinding : string = "Hello World"

  reset(){
    this.oneWayProp = "Pomme"
    this.twoWayBinding = "Pomme"
  }

}
