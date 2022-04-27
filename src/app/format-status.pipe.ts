import { Pipe, PipeTransform } from '@angular/core';
import { server } from './ng-class-practice/server';

@Pipe({
  name: 'formatStatus'
})
export class FormatStatusPipe implements PipeTransform {

  srv: Array<server>;
  i: any;
  transform(items: Array<server>, term: string): any {
    if(term==""){
      return items;
    }

    //starts with can help up with an utocomplete feature
    
    return items.filter(e => e.status.toLowerCase() == term.toLowerCase());



    // this.srv = [];
    // for(this.i of items){
    //   if(this.i.status == term){
    //     this.srv.push(this.i);
    //   }
    // }
    // return this.srv;



  }

}
