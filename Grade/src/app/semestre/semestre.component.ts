import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

declare var $: any;

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {

  constructor(public service: MyService) { }

  ngOnInit() {
  }

  eventAddSemestre() { // adicionar um semestre 
      var semestre = this.service.getSemestre();
      $('.div_aux_semestre').before(semestre); 
      // this.updateInfs();
  }


}
