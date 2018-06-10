import { Component } from '@angular/core';
import { MyService } from './my.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num_semestre;
  select_obrigatoria;
  
  constructor(public service: MyService) {
        this.listaDisciplinas(1);
        this.listaDisciplinas(0);
        this.gerarDisciplinas();
  }
  
  semestre_selecionado;
  semestres_curso = [];
  lista_html_disc;

  // $(".inserir_aqui").appendTo(".html_disc");

  eventAddSemestre() { // adicionar um semestre 
      var semestre = this.service.getSemestre();
      $('.div_aux_semestre').before(semestre); 
      this.num_semestre = this.num_semestre+1;
  }

  closeModal(){ // fecha modal da add disciplina
      this.service.closeModal();
  }

  // addDisciplina(id_disciplina, id_semestre){ // adicionar uma disciplina
  //     this.service.moveShowDisciplina(id_disciplina, id_semestre);
  // }

  gerarDisciplinas(){ // gera as divs das disciplinas
      this.lista_html_disc = this.service.gerarDisciplinas();
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

  eventAddDisciplina(tipo, id_disciplina){ // evento do clique de adição da disciplina
      this.semestre_selecionado = this.semestreSelecionado();
      if((id_disciplina == null) || (id_disciplina == 0)){
        alert("Selecione uma disciplina para adicionar ao semestre!");
      }
      // var componente = this.service.getComponentById(id_disciplina);
      // if(disciplina_ja_existe(componente, semestre_selecionado))
        // alert("Disciplina já existe neste período!");
      // else

      this.service.moveShowDisciplina(id_disciplina, this.semestre_selecionado);
        // this.semestres_curso[this.semestre_selecionado-1].push(componente)
      // }
      // document.formAddDisciplina.select_optativa.selectedIndex = 0;
      // document.formAddDisciplina.select_obrigatoria.selectedIndex = 0;
  }

  listaDisciplinas(tipo){ // gera a lista das disciplinas para o select
        var list =  this.service.getListaDisciplinas(tipo);
        $(document).ready(function(){
            $(".selec_disc"+tipo).append(list);
        });
  }

  eventRemoverDisciplina(id_disciplina){ // evento do clique para remover a disciplina
      this.service.moveHideDisciplina(id_disciplina);   
	}
  

}
