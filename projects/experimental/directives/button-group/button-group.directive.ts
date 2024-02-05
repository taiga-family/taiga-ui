import {Directive, Inject} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiButtonGroupComponent} from './button-group.component';

@Directive({
    selector: '[tuiButtonGroup]',
})
export class TuiButtonGroupDirective {
    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonGroupComponent);
    }
}
