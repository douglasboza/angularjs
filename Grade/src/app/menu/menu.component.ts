import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

declare var $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    num_semestres=0;
    num_disciplinas=0;
    media_disciplinas=0
    
    constructor(public service: MyService) { 
    }

    ngOnInit() {}

    updateInfs(){
        this.num_disciplinas = this.service.getNumDisciplinas();
        this.num_semestres = this.service.getNumSemestres();
        $("#total_disciplinas").text(this.num_disciplinas);
        $("#media_disciplinas").text(this.num_disciplinas/this.num_semestres);
    }

    eventAddSemestre() { // adicionar um semestre 
        var semestre = this.service.getSemestre();
        $('.div_aux_semestre').before(semestre); 
        this.updateInfs();
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
