import {Directive} from '@angular/core';
import {TUI_VALUE_ACCESSOR_PROVIDER} from '@taiga-ui/kit/providers';

@Directive({
    selector: `[tuiValueAccessor]`,
    providers: [TUI_VALUE_ACCESSOR_PROVIDER],
})
export class TuiValueAccessorDirective {}
