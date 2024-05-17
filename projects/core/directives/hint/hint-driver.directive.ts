import {Directive} from '@angular/core';
import {TuiDriverDirective} from '@taiga-ui/core/abstract';

@Directive({
    selector: '[tuiHint]:not(ng-container):not(ng-template)',
})
export class TuiHintDriverDirective extends TuiDriverDirective {
    public readonly type = 'hint';
}
