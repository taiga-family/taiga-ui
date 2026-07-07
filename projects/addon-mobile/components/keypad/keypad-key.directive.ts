import {Directive, inject, input, TemplateRef} from '@angular/core';

import {type TuiKeypadKey} from './keypad.options';

@Directive({selector: 'ng-template[tuiKeypadKey]'})
export class TuiKeypadKeyDirective {
    public readonly tuiKeypadKey = input.required<TuiKeypadKey>();
    public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
