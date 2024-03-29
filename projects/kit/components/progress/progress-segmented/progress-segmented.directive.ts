import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiProgressSegmentedComponent} from './progress-segmented.component';

@Directive({
    standalone: true,
    selector: '[tuiProgressBar][segments]',
    host: {
        class: '_segmented',
        '[style.--t-segment-width]': '1 / segments',
    },
})
export class TuiProgressSegmentedDirective {
    @Input()
    public segments = 1;

    protected readonly nothing = tuiWithStyles(TuiProgressSegmentedComponent);
}
