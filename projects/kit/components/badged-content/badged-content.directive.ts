import {Directive, input} from '@angular/core';
import {type TuiLooseUnion} from '@taiga-ui/cdk/types';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiBadgedContentDirective {
    public readonly tuiSlot = input<TuiLooseUnion<'bottom' | 'top'>>('top');
}
