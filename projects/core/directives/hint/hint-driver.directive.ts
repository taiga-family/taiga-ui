import {Directive} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiDriverDirective} from '@taiga-ui/core/abstract';

@Directive({
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
    providers: [TuiDestroyService],
})
export class TuiHintDriverDirective extends AbstractTuiDriverDirective {
    public readonly type = 'hint';
}
