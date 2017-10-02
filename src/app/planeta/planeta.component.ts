import { Component, Input } from '@angular/core'

@Component({
    selector: 'planeta',
    templateUrl: 'planeta.component.html',
    styles: []
})
export class PlanetaComponent {

    @Input() titulo: string = `Terra`
    @Input() imagem: string = ``
    @Input() conteudo: string = ``

}