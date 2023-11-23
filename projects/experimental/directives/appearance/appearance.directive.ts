import {Directive, Input} from '@angular/core';
import {TuiInteractiveStateT} from '@taiga-ui/core';

@Directive({
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'tuiAppearance',
        '[attr.data-state]': 'tuiAppearanceState',
        '[attr.data-focus]': 'tuiAppearanceFocus',
    },
})
export class TuiAppearanceDirective {
    @Input()
    tuiAppearance = '';

    @Input()
    tuiAppearanceState: TuiInteractiveStateT | null = null;

    @Input()
    tuiAppearanceFocus: boolean | null = null;
}
