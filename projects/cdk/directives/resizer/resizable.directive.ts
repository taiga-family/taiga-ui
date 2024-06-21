import {Directive} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';

@Directive({
    standalone: true,
    selector: '[tuiResizable]',
})
export class TuiResizable extends TuiElement {}
