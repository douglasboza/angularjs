import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { MenuComponent } from '../menu/menu.component';

declare var $: any;

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  lista_html_disc;
  semestre_selecionado;
  // num_disciplinas=0;

  constructor(public service: MyService, public menucomponent:MenuComponent) {
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
      this.service.moveShowDisciplina(id_disciplina, this.semestre_selecionado);
      this.menucomponent.updateInfs();
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
