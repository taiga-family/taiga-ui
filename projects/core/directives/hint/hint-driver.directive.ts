import {Directive} from '@angular/core';
import {AbstractTuiDriverDirective} from '@taiga-ui/core/abstract';

@Directive({
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
})
export class TuiHintDriverDirective extends AbstractTuiDriverDirective {
    public readonly type = 'hint';
}
