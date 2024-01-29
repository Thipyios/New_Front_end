import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destaquePesquisa',
})
export class DestaquePesquisaPipe implements PipeTransform {
  transform(texto: string, termoPesquisado: string): string {
    return texto.replace(new RegExp(termoPesquisado, 'gi'), '<strong>$&</strong>');
  }
}
