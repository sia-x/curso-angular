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
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion:string;
  casa: string;
}
