import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName'
})
export class ShortenNamePipe implements PipeTransform {
  res: string = "";
  dots: string = ".";
  transform(chaine: string, n: number): string {
    if (chaine.length > 13) {
      this.dots = this.dots.repeat(n)
      return chaine.substring(0,13) + this.dots;
    } else {
      return chaine;
    }
  }
}
