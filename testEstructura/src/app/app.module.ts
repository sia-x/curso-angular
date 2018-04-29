import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Routes
import { appRouting } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/generic/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

//Services 
import { HeroesService } from './servicios/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
