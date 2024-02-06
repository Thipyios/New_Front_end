import { Component } from '@angular/core';
import { ExemploObservablesService } from './exemplo-observables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-01-02';
  numeros: number[] = [];

  constructor( private exemploObservablesService: ExemploObservablesService) {};

  ngOnInit() {
    this.exemploObservablesService.geraNumeroAleatorio().subscribe(
      (numero) => {
        this.numeros.push(numero);
      }
    );
  }
}
