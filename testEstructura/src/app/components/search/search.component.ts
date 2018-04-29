import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  findHeroes:Heroe[] = [];
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.findHeroes = this._heroesService.buscarHeroe(params['termino']);
    });
  }

}
