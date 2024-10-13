import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numericInputPipe'
})
export class NumericInputPipe implements PipeTransform {

    public transform(value: number): number {

        const sanitizedValue: string = value
            .toString()
            .replace(/[^-?\d]/g, '')
            .replace(/(?!^-)-/g, '')
            .replace(/^(-)?0+(?=\d)/, '$1');

        return parseInt(sanitizedValue, 10);
    }
}