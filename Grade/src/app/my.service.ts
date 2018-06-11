import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

declare var $: any;

@Injectable()
export class MyService {
    constructor() {}
  
    num_semestre = 1;
    expandir_inf = true;
    expandir_btn_mobile = true;
    expandir_lateral = true;
    disciplinas=0;
    media_disciplina_semestre=0;
    atividades_complementares=0;
    conclusao=0;
    carga_horaria_obr=0;
    carga_horaria_opt=0;
    carga_horaria_tot=0;

    detalharComponente(){
        if(this.expandir_inf){
            $('.subs_disc_list').css({"max-height":"300px"});
            $('.item_disc').css({"min-height": "180px"});
        }else{
            $('.subs_disc_list').css({"max-height":"0px"});
            $('.item_disc').css({"min-height": "60px"});
        }
        this.expandir_inf = !this.expandir_inf;
    }

    expandirMenuMobile(){
 		if(this.expandir_btn_mobile){
 			$('.box1_index').css({"max-height":"1500px"});
 			$('.bars_menu_mobile i').css({"-ms-transform":"rotate(90deg)", "-webkit-transform":"rotate(90deg)", "transform":"rotate(90deg)"});		
 		}else{
 			$('.box1_index').css({"max-height":"0px"});
 			$('.bars_menu_mobile i').css({"-ms-transform":"rotate(0deg)", "-webkit-transform":"rotate(0deg)", "transform":"rotate(0deg)"});
 		}
 		this.expandir_btn_mobile = !this.expandir_btn_mobile;
    }
 
    expandirLateral(){
 		if(this.expandir_lateral){
 			$('.box1_index').addClass("box1_index_hide");
 			$('.box1_index_scrool').addClass("box1_index_scrool_hide");
 			$('.box2_index').addClass("box2_index_hide");
 			
 		}else{
 			$('.box1_index').removeClass("box1_index_hide");
 			$('.box1_index_scrool').removeClass("box1_index_scrool_hide");
 			$('.box2_index').removeClass("box2_index_hide");
 		}
 		this.expandir_lateral = !this.expandir_lateral;
    } 

    getSemestre(){
        var semestre = "	<!-- item semestre --> "+
        " <div id='semestre_num_"+this.num_semestre+"' class='box_semestre box_semestre_repeat'> "+    
        " <div class='col_semestre1 col_semestre1_repeat'> "+
        " 	<p class='num_semestre'><span>"+this.num_semestre+"°</span> semestre</p> "+
        "</div> "+
        " <div class='col_semestre2'> "+
        "	<div  class='aux_add_disciplina item_disc_nova'> "+
        "		<input type='image' onclick='document.getElementById(\"semestre_selecionado\").value="+this.num_semestre+";document.getElementById(\"addDisciplinaModal\").style.display=\"block\"' "+
        "			src='assets/img/add.svg'/>"+
        " 	</div> "+    		
        "</div> "+   			
        " </div> "+ 
        " <!-- fim item semestre -->";
        this.num_semestre = this.num_semestre+1;
        return semestre;
    }

    getSemestreSelecionado(){
        return $("#semestre_selecionado").val();
    }

    moveShowDisciplina(id_disciplina, id_semestre){
        $("#dis_id_"+id_disciplina).appendTo("#semestre_num_"+id_semestre);
        $("#dis_id_"+id_disciplina).css({"opacity":"1"}); 
    }
  
    moveHideDisciplina(id_disciplina){
        $("#dis_id_"+id_disciplina).css({"opacity":"0"});    
        setTimeout(function() {
            $("#dis_id_"+id_disciplina).appendTo(".all_disc");
        }, 900);
        this.disciplinas = this.disciplinas+1;
        // this.carga_horaria_obr = this.carga_horaria_obr + 
    }

    closeModal(){
        var modal = document.getElementById('addDisciplinaModal');
        modal.style.display = "none";
    }


    getDescricaoModalidade(tipo_vinculo_componente){
        if(tipo_vinculo_componente == 1)
        return 'Obrigatoria';
        if(tipo_vinculo_componente == 2)
        return 'Optativa';
    }

    getComponentById(id_componente){
        var componente_encontrado = null;
        for (var i = 0; i < this.data.componentes.length; i++) {
            var componente = this.data.componentes[i];
            if(componente.id == id_componente){
            componente_encontrado = componente;
            }
        }
        return componente_encontrado;
    }

    gerarDisciplinas(){
        return this.data.componentes;
    }

    getListaDisciplinas(tipo){ 
        var list_disc = "";
        for (var i = 1; i < this.data.componentes.length; i++) {
        var componente = this.data.componentes[i];
        if(componente.semestre_oferta == tipo){
            list_disc = list_disc + 
            "<option value="+componente.id+">" + 
            componente.codigo + ' - ' + 
            componente.nome +
            "</option>";
        }
        }

        return list_disc;
    }


    data = {
    "componentes":[
    {
      "id" : 1,
      "nome" : "PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS I",
      "ch_total" : 30,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0017",
      "equivalencia" : "( 52657 OU 2051002 ) ",
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 1
    },
    {
      "id" : 2,
      "nome" : "PRÁTICAS DE LEITURA EM INGLÊS",
      "ch_total" : 30,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0018",
      "equivalencia" : "( 52782 OU 2051708 ) ",
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 1
    },
    {
      "id" : 3,
      "nome" : "RESOLUÇÃO DE PROBLEMAS MATEMÁTICOS PARA TI",
      "ch_total" : 180,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0019",
      "equivalencia" : "( 52656 ) ",
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 1
    },
    {
      "id" : 4,
      "nome" : "TECNOLOGIA DA INFORMAÇÃO E SOCIEDADE",
      "ch_total" : 30,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0020",
      "equivalencia" : "( 52535 ) ",
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 1
    },
    {
      "id" : 5,
      "nome" : "INTRODUÇÃO ÀS TÉCNICAS DE PROGRAMAÇÃO",
      "ch_total" : 90,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0012",
      "equivalencia" : "( 2022850 ) OU ( 61131 ) ",
      "co_requisito" : null,
      "pre_requisito" : "( 55031 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 6,
      "nome" : "CÁLCULO DIFERENCIAL E INTEGRAL I",
      "ch_total" : 90,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0024",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : "( 55031 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 7,
      "nome" : "PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS II",
      "ch_total" : 30,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0027",
      "equivalencia" : "( 52784 OU 2051700 OU 57603 ) ",
      "co_requisito" : null,
      "pre_requisito" : "( 55019 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 8,
      "nome" : "FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO I",
      "ch_total" : 90,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0028",
      "equivalencia" : "( 52653 OU 2040665 ) ",
      "co_requisito" : null,
      "pre_requisito" : "( 55031 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 9,
      "nome" : "VETORES E GEOMETRIA ANALÍTICA",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0034",
      "equivalencia" : "( 48581 E 48583 ) OU ( 2051005 ) ",
      "co_requisito" : null,
      "pre_requisito" : "( 55031 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 10,
      "nome" : "ESTRUTURA DE DADOS BÁSICAS I",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0029",
      "equivalencia" : "( 2022856 ) OU ( 52778 ) ",
      "co_requisito" : "( 55024 ) ",
      "pre_requisito" : "( 52650 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 11,
      "nome" : "LINGUAGEM DE PROGRAMAÇÃO I",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0030",
      "equivalencia" : "( 2022856 ) OU ( 52785 ) ",
      "co_requisito" : "( 55023 ) ",
      "pre_requisito" : "( 52650 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 12,
      "nome" : "PROBABILIDADE",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0033",
      "equivalencia" : null,
      "co_requisito" : "( 55025 ) ",
      "pre_requisito" : "( 52662 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 13,
      "nome" : "FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO II",
      "ch_total" : 90,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0038",
      "equivalencia" : "( 2040951 OU 52659 ) ",
      "co_requisito" : null,
      "pre_requisito" : "( 55022 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 14,
      "nome" : "ESTRUTURAS DE DADOS BÁSICAS II",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0039",
      "equivalencia" : "( 2022900 ) OU ( 52787 ) ",
      "co_requisito" : "( 55027 ) ",
      "pre_requisito" : "( 55023 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 15,
      "nome" : "LINGUAGEM DE PROGRAMAÇÃO II",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 1,
      "codigo" : "IMD0040",
      "equivalencia" : "( 2022900 ) OU ( 52786 ) ",
      "co_requisito" : "( 55026 ) ",
      "pre_requisito" : "( 55024 ) ",
      "semestre_oferta" : 1
    },
    {
      "id" : 16,
      "nome" : "PROGRAMAÇÃO EM HARDWARE DE REDES",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0708",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : "55023 E 55030 E 55028 ",
      "semestre_oferta" : 0
    },
    {
      "id" : 17,
      "nome" : "PROJETO INTEGRADOR DE REDES I",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0709",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 0
    },
    {
      "id" : 18,
      "nome" : "GERÊNCIA DE REDES",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0712",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : "55028 ",
      "semestre_oferta" : 0
    },
    {
      "id" : 19,
      "nome" : "DESENVOLVIMENTO DE PROJETOS DE REDES DE COMPUTADORES",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0725",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 0
    },
    {
      "id" : 20,
      "nome" : "MECÂNICAS E BALANCEAMENTO DE JOGOS",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0801",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 0
    },
    {
      "id" : 21,
      "nome" : "PROJETO DE INOVAÇÃO TECNOLÓGICA",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0822",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : "55027 ",
      "semestre_oferta" : 0
    },
    {
      "id" : 22,
      "nome" : "TECNOLOGIA DA INFORMAÇÃO NA SAÚDE",
      "ch_total" : 60,
      "tipo_vinculo_componente" : 2,
      "codigo" : "IMD0920",
      "equivalencia" : null,
      "co_requisito" : null,
      "pre_requisito" : null,
      "semestre_oferta" : 0
    }
      ]

  }

}