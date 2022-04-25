import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   items: Candidat[] = [new Candidat(1,"montassar","riahi",23,"développeur","c:/"),
   new Candidat(1,"anis","zariat",27,"développeur","c:/"),
   new Candidat(1,"homer","simpson",23,"actor","c:/"),
   new Candidat(1,"bart","simpson",23,"student","c:/"),
   new Candidat(1,"american","father",23,"Goverment employee","c:/")]; 


}
