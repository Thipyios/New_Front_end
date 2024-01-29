import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  termoPesquisa: string = '';
  resultados: any[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  pesquisar(): void {
    this.wikipediaService.search(this.termoPesquisa).subscribe((data) => {
      this.resultados = data.query.search;
    });
  }
}
