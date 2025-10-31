import {Directive} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';

@Directive({
    selector: '[tuiResizable]',
})
export class TuiResizable extends TuiElement {}
