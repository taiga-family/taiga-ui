import {Pipe, type PipeTransform} from '@angular/core';
import {TuiFormatNumberPipe as TuiFormatNumberPipeLegacy} from '@taiga-ui/core/pipes/format-number';
import {tuiFormatNumber} from '@taiga-ui/kit/utils';

@Pipe({
    name: 'tuiFormatNumber',
    pure: false,
})
export class TuiFormatNumberPipe
    extends TuiFormatNumberPipeLegacy
    implements PipeTransform
{
    public override formatter = tuiFormatNumber;
}
