import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = 'Anis';
  color: string ="green";
  @Input() cl = 'green';
  hd = true;
  s:string ="";

  constructor() {}

  ngOnInit(): void {}

  traitementDuBouton() {
    alert('Click détecté');
  }
  msgtoChild : string = "this is a msg from parent to its child";
  traitement(a:string) {
    //alert(msg);
    this.s = a;
  }
}
