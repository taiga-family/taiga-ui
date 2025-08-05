import {Directive, Input} from '@angular/core';
import {type TuiLooseUnion} from '@taiga-ui/cdk/types';

@Directive({
    standalone: true,
    selector: '[tuiSlot]',
})
export class TuiBlockStatusDirective {
    @Input()
    public tuiSlot: TuiLooseUnion<'action' | 'top'> = 'top';
}
