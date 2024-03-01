import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiProgressSegmentedComponent} from './progress-segmented.component';

@Directive({
    selector: '[tuiProgressBar][segments]',
    host: {
        class: '_segmented',
        '[style.--t-segment-width]': '1 / segments',
        '[attr.new]': '""', // TODO: drop in v4.0
    },
})
export class TuiProgressSegmentedDirective {
    @Input()
    public segments = 1;

    protected readonly nothing = tuiWithStyles(TuiProgressSegmentedComponent);
}
