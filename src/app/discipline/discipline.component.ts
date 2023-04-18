import { Component, OnInit } from '@angular/core';
import { Discipline } from './discipline';
import { DisciplineService } from './discipline.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css'],
})
export class DisciplineComponent implements OnInit {
  disciplines: Discipline[] = [];

  constructor(private disciplineService: DisciplineService) {}

  ngOnInit(): void {
    this.getDisciplines();
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines();
  }
}
