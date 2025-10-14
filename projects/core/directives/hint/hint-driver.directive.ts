import {Directive} from '@angular/core';
import {TuiDriverDirective} from '@taiga-ui/core/classes';

@Directive()
export class TuiHintDriver extends TuiDriverDirective {
    public readonly type = 'hint';
}
