import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

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
    segments = 1;

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiProgressSegmentedComponent);
    }
}
