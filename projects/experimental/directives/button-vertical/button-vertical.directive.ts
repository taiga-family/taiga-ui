import {Directive, Inject} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiButtonVerticalComponent} from './button-vertical.component';

@Directive({
    selector: '[tuiButtonVertical]',
})
export class TuiButtonVerticalDirective {
    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonVerticalComponent);
    }
}
