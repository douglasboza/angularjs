import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    num_semestre;
    

    constructor(public service: MyService) { }

    ngOnInit() {}

    eventAddSemestre() { // adicionar um semestre 
        var semestre = this.service.getSemestre();
        $('.div_aux_semestre').before(semestre); 
        this.num_semestre = this.num_semestre+1;
    }

    semestreSelecionado(){
        return this.service.getSemestreSelecionado();
    }

    eventDetalharComponente(){
        this.service.detalharComponente();
    }

    eventExpandirLatereal(){
        this.service.expandirLateral();
    }

    eventExpandirMenuMobile(){
        this.service.expandirMenuMobile();
    }

}
