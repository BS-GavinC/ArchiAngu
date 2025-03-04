import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';


@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalComponent{

  maValeur : string = "Bonjour"

  monSignal : WritableSignal<string> = signal("Bonjour")

  private _refDetector : ChangeDetectorRef = inject(ChangeDetectorRef)

  setValeur(){
    setTimeout(() => {
      this.maValeur = "Bonsoir"
      this._refDetector.detectChanges()
    }, 10)
  }

  setSignal(){
    setTimeout(() => {
      this.monSignal.set("Bonsoir")
    }, 10)
  }


}
