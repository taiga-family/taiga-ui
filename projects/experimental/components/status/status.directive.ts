import {Directive, Inject} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiStatusComponent} from './status.component';

@Directive({
    selector: '[tuiStatus]',
    inputs: ['tuiStatus'],
    host: {
        tuiStatus: '',
        '[style.--t-status]': 'tuiStatus || null',
    },
})
export class TuiStatusDirective {
    tuiStatus = '';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiStatusComponent);
    }
}
