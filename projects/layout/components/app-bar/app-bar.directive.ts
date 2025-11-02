import {Directive, input} from '@angular/core';
import {type TuiLooseUnion} from '@taiga-ui/cdk/types';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiAppBarDirective {
    public readonly tuiSlot = input<TuiLooseUnion<'left' | 'right'>>('left');
}
