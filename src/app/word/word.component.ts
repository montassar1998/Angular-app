import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  bgColor: string = "";
  colorT: string = "";
  faceSize: string = "";
  faceF: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  async modifySize(a: string) {

    //this.faceSize=(this.i)+"px";
    function delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
   while(true){
    for(let i=0;i<400;i++){
      this.faceSize=i+"px";
      //alert(typeof(this.faceSize))
      await delay(2);
    }
  }
    
  }
  // this.faceSize=a+"px";

}
