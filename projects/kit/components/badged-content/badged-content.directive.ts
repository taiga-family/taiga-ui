import {Directive, Input} from '@angular/core';
import {type TuiLooseUnion} from '@taiga-ui/cdk/types';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiBadgedContentDirective {
    @Input()
    public tuiSlot: TuiLooseUnion<'bottom' | 'top'> = 'top';
}
