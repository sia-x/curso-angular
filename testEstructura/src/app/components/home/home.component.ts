import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

personajes:any[] = [
  {
      'nombre' : 'Spiderman',
      'propiedad' : 'guapo',
  },
  {
    'nombre' : 'Octopus',
    'propiedad' : 'feo',
  }
]

}
