import { NumberFormatStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploObservablesService {
  constructor() { }

  geraNumeroAleatorio(): Observable<number> {
    //this.numeros.push(Math.floor(Math.random() * 100));
    //const dados = from(this.numeros);
    //return dados;
    const observable = new Observable<number>((subscriber) => {
      for (let i = 0; i < 101; i++) {
        subscriber.next(i);
      }
    });
    return observable;
  }


}
