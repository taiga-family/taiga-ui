import {Directive} from '@angular/core';

import {TUI_VALUE_ACCESSOR_PROVIDER} from './value-accessor.provider';

@Directive({
    selector: '[tuiValueAccessor]',
    providers: [TUI_VALUE_ACCESSOR_PROVIDER],
})
export class TuiValueAccessorDirective {}
