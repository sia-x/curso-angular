import { Injectable } from '@angular/core';
import heroes from '../data/heroes';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = heroes;  
  
  constructor() { 
    
  }

  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe(id:number):Heroe{
    return this.heroes[id];
  }

  buscarHeroe(termino:string):Heroe[]{
    let heroes:Heroe[] = [];
    termino = termino.toLowerCase();

    for (let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        heroes.push(heroe);
      }
    }
    return heroes;
  }
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion:string;
  casa: string;
}
