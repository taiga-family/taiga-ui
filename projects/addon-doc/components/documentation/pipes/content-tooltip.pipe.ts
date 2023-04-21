import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `tuiShowContentTooltip`})
export class TuiShowContentTooltip implements PipeTransform {
    transform(type: string): boolean {
        return type.includes(`PolymorpheusContent`);
    }
}
