import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   //return null;

    return value.trim().split(/\s+/).length;
  }

}
