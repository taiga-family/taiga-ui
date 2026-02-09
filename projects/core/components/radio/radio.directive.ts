import {Directive, inject, input} from '@angular/core';
import {RadioControlValueAccessor} from '@angular/forms';
import {TUI_DEFAULT_IDENTITY_MATCHER} from '@taiga-ui/cdk/constants';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk/types';

@Directive({selector: 'input[type="radio"][tuiRadio][identityMatcher]'})
export class TuiRadioDirective<T> {
    public readonly identityMatcher = input<TuiIdentityMatcher<T>>(
        TUI_DEFAULT_IDENTITY_MATCHER,
    );

    constructor() {
        const accessor = inject(RadioControlValueAccessor);
        const writeValue = accessor.writeValue.bind(accessor);

        accessor.writeValue = (value: T) => {
            if (this.identityMatcher()(value, accessor.value)) {
                writeValue(accessor.value);
            } else {
                writeValue(value);
            }
        };
    }
}
