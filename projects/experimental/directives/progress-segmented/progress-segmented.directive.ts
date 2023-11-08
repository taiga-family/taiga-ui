import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiProgressSegmentedComponent} from './progress-segmented.component';

@Directive({
    selector: '[tuiProgressBar][segments]',
    host: {
        class: '_segmented',
        '[attr.new]': '""', // TODO: drop in v4.0
    },
})
export class TuiProgressSegmentedDirective {
    @Input()
    segments = 1;

    @HostBinding('style.--t-segment-width')
    get segmentWidth(): number {
        return 1 / this.segments;
    }

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiProgressSegmentedComponent);
    }
}
