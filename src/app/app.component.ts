import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { PlanetaComponent }  from './planeta/planeta.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';

  //listaPlanetas do tipo array de planetaComponent que começa com um array vazio
  listaPlanetas: Object[] = []

  constructor(private ajax: Http){

    ajax.get(`http://localhost:3000/v1/dados/`)
        .subscribe(
          response => this.listaPlanetas = response.json()
          ,erro => console.log(erro)
        )
  }

}
