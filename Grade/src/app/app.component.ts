import { Component } from '@angular/core';
import { MyService } from './my.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num_semestre = 1;
  select_obrigatoria;
  constructor(public service: MyService) {
   
  }

  add_semestre() {
      var semestre = this.service.getSemestre();
      $('.div_aux_semestre').before(semestre); 
  }
  closeModal(){
    this.service.closeModal();
  }

  addDisciplina(componente, semestre){
    var disiplina_html = this.service.getDisciplina(componente, semestre);
    $("#semestre_num_"+semestre+" .col_semestre1").append(disiplina_html);
  }

  eventAddDisciplina(tipo, disciplina){
    alert(disciplina);
    //   if(tipo == 1){			
    //     var id_disciplina = document.formAddDisciplina.select_optativa.options[document.formAddDisciplina.select_optativa.selectedIndex].value;
    //   }else{
    //     var id_disciplina = document.formAddDisciplina.select_obrigatoria.options[document.formAddDisciplina.select_obrigatoria.selectedIndex].value;
    //   }
    //   if(id_disciplina == 0)
    //     alert("Selecione uma disciplina para adicionar ao semestre!");
    //   var componente = get_componente_by_id(id_disciplina);
    //   if(disciplina_ja_existe(componente,semestre_selecionado))
    //     alert("Disciplina já existe neste período!");
    //   else{
    //     add_disciplina(componente, semestre_selecionado); // função que adiciona o html da disciplinas
    //     semestres_curso[semestre_selecionado-1].push(componente)
    //   }
    //   document.formAddDisciplina.select_optativa.selectedIndex = 0;
    //   document.formAddDisciplina.select_obrigatoria.selectedIndex = 0;
   }

}
