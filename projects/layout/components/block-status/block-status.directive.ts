import {Directive, input} from '@angular/core';
import {type TuiLooseUnion} from '@taiga-ui/cdk/types';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    public readonly tuiSlot = input<TuiLooseUnion<'action' | 'top'>>('top');
}
