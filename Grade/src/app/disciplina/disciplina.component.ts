import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

declare var $: any;

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  lista_html_disc;
  semestre_selecionado;

  constructor(public service: MyService) {
    this.listaDisciplinas(1);
    this.listaDisciplinas(0);
    this.gerarDisciplinas();
  }

  ngOnInit(){}
  
  closeModal(){ // fecha modal da add disciplina
    this.service.closeModal();
  }

  eventAddDisciplina(tipo, id_disciplina){ // evento do clique de adição da disciplina
      this.semestre_selecionado = this.service.getSemestreSelecionado();
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
  
  getDescricaoModalidade(tipo_vinculo){
    return this.service.getDescricaoModalidade(tipo_vinculo);
  }

  gerarDisciplinas(){ // gera as divs das disciplinas
      this.lista_html_disc = this.service.gerarDisciplinas();
  }


}
