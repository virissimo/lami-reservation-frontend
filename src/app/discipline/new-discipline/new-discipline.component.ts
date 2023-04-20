import { Component, OnInit } from '@angular/core';
import { DisciplineService } from '../discipline.service';
import { Location } from '@angular/common';

import { FormControl, FormGroup } from '@angular/forms';
import { Discipline } from '../discipline';
import { Laboratory } from 'src/app/laboratory/laboratory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './new-discipline.component.html',
  styleUrls: ['./new-discipline.component.css'],
})
export class NewDisciplineComponent implements OnInit {

  labs: Laboratory[] = []

  constructor(
    private disciplineService: DisciplineService,
    private location: Location) { }

  ngOnInit(): void {
    this.getLabs();
  }

  goBack(): void {
    this.location.back();
  }

  getLabs(){
    //TODO metodo que busca laboratorios e carrega o select
  }

  addDiscipline = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    prioritaryLab: new FormControl({})
  })

  getNewDiscipline(){
    return {
      name: this.addDiscipline.value.name,
      description: this.addDiscipline.value.description,      
      prioritaryLab: this.addDiscipline.value.prioritaryLab
    }
  }

  save(): void {
    console.log(this.addDiscipline.value)
    this.disciplineService.addDiscipline(this.getNewDiscipline() as Discipline)
      .subscribe(discipline => {
        console.log({discipline});
      });
  }
}
