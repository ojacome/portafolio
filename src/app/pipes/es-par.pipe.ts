import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esPar'
})
export class EsParPipe implements PipeTransform {

  transform(value: number): boolean {

    return value%2 === 0;
  }

}
