import {Directive} from '@angular/core';
import {TuiElementDirective} from '@taiga-ui/cdk/directives/element';

@Directive({
    standalone: true,
    selector: '[tuiResizeable]',
})
export class TuiResizeableDirective extends TuiElementDirective {}
