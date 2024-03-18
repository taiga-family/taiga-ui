import {Directive} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiBlockDetailsComponent} from './block-details.component';

@Directive({
    standalone: true,
    selector: '[tuiBlockDetails]',
})
export class TuiBlockDetailsDirective {
    protected readonly nothing = tuiWithStyles(TuiBlockDetailsComponent);
}
