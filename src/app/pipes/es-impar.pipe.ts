import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esImpar'
})
export class EsImparPipe implements PipeTransform {

  transform(value: number): boolean {
    
    return value%2 !== 0;
  }

}
