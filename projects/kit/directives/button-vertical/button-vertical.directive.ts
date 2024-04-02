import {Directive} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiButtonVerticalComponent} from './button-vertical.component';

@Directive({
    standalone: true,
    selector: '[tuiButtonVertical]',
})
export class TuiButtonVerticalDirective {
    protected readonly nothing = tuiWithStyles(TuiButtonVerticalComponent);
}
