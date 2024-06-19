import {Directive} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';

@Directive({
    standalone: true,
    selector: '[tuiResizeable]',
})
export class TuiResizeable extends TuiElement {}
