import {Directive} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiDriverDirective} from '@taiga-ui/core/abstract';

@Directive({
    selector: `[tuiHint]`,
    providers: [TuiDestroyService],
})
export class TuiHintDriverDirective extends AbstractTuiDriverDirective {}
