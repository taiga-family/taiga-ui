import {Directive, Inject} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiBlockDetailsComponent} from './block-details.component';

@Directive({
    selector: '[tuiBlockDetails]',
})
export class TuiBlockDetailsDirective {
    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiBlockDetailsComponent);
    }
}
