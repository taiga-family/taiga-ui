import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';

@Directive({selector: '[tuiKeypadHost]'})
export class TuiKeypadHostDirective {
    public readonly focused = tuiFocusedIn(tuiInjectElement());
}
