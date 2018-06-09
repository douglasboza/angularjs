import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

declare var $: any;

@Injectable()
export class MyService {
  	constructor() {}
  
  	num_semestre = 1;

	getSemestre() {
		var semestre = "	<!-- item semestre --> "+
		" <div id='semestre_num_"+this.num_semestre+"' class='box_semestre box_semestre_repeat'> "+    
		" <div class='col_semestre1 col_semestre1_repeat'> "+
		" 	<p class='num_semestre'><span>"+this.num_semestre+"°</span> semestre</p> "+
		"</div> "+
		" <div class='col_semestre2'> "+
		"	<div  class='aux_add_disciplina item_disc_nova'> "+
		"		<input type='image' onclick='semestre_selecionado="+this.num_semestre+";document.getElementById(\"addDisciplinaModal\").style.display=\"block\"' "+
		"			src='assets/img/add.svg'/>"+
		" 	</div> "+    		
		"</div> "+   			
		" </div> "+ 
		" <!-- fim item semestre -->";
			this.num_semestre = this.num_semestre+1;
		return semestre;
	}

	closeModal(){
		var modal = document.getElementById('addDisciplinaModal');
		modal.style.display = "none";
	}

	getDisciplina(componente, semestre){
		// tem que formatar esse html de acordo com o id da disciplina, vai ter o array/json com os dados, tem que ir nesse array e pegar as 
		// informações da disciplina.
			if(semestre == null)
				semestre = componente.semestre_oferta;
		       var disciplina = ' <!-- item disciplina --> '+
               '      <div id="dis_id_'+componente.id+'" class="item_disc item_disc_'+this.getDescricaoModalidade(componente.tipo_vinculo_componente)+'"> '+
               '          <p class="infs_topo_disc">'+this.getDescricaoModalidade(componente.tipo_vinculo_componente)+' - <span>'+componente.ch_total+'h</span></p> '+
               '          <p class="nome_disc">'+componente.codigo+'</p> '+
		       '          <p class="subs_disc_list">'+componente.nome+'</p> ';
               if (componente.pre_requisito != null) {
	               disciplina +='<div class="subs_disc_list"> '+
	               '               <p>Pré requisitos:</p> '+
	               '               <span>'+componente.pre_requisito+'</span> '+
	               '         	</div>';
           		}
           		if (componente.co_requisito != null) {
              		disciplina +='<div class="subs_disc_list"> '+
               '             <p>Co requisitos:</p> '+
               '             <span>'+componente.co_requisito+'</span> '+
               '         </div> ';
           		}
           		if (componente.equivalencia != null) {
               		disciplina +='<div class="subs_disc_list"> '+
               '             <p>Equivalência:</p> '+
               '             <span>'+componente.equivalencia+'</span> '+
               '         </div> ';
               	}
               disciplina +='         <p onclick="remove_disciplina('+componente.id+')" class="rem_disciplina">remover</p> '+
               '      </div> '+
               '       <!-- fim item disciplina --> ';
		return disciplina;
	}

	getDescricaoModalidade(tipo_vinculo_componente){
		if(tipo_vinculo_componente == 1)
			return 'Obrigatoria';
		if(tipo_vinculo_componente == 2)
			return 'Optativa';
	}

	get_componente_by_id(id_componente){
		var componente_encontrado = null;
		for (var i = 0; i < data.componentes.length; i++) {
	  		var componente = data.componentes[i];
	  		if(componente.id == id_componente){
	  			componente_encontrado = componente;
	  			
	  		}
    		
		}
		return componente_encontrado;
	}



}