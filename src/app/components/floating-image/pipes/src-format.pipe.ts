import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'srcFormat'})
export class SrcFormatPipe implements PipeTransform {
    transform(value: any): string | undefined {

        const INVALID_SRC = value === undefined;

        if (INVALID_SRC) return "Invalid name";

        const name = value.split('/').pop().split('.').shift();

        return name;
    }
}