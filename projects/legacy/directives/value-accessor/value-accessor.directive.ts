import {Directive} from '@angular/core';

import {TUI_VALUE_ACCESSOR_PROVIDER} from './value-accessor.provider';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiValueAccessor]',
    providers: [TUI_VALUE_ACCESSOR_PROVIDER],
})
export class TuiValueAccessorDirective {}
