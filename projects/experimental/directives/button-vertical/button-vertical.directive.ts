import {Directive} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiButtonVerticalComponent} from './button-vertical.component';

@Directive({
    selector: '[tuiButtonVertical]',
})
export class TuiButtonVerticalDirective {
    protected readonly nothing = tuiWithStyles(TuiButtonVerticalComponent);
}
