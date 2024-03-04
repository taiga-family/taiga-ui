import {Directive, inject, Input} from '@angular/core';
import {RadioControlValueAccessor} from '@angular/forms';
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiIdentityMatcher} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: 'input[type="radio"][tuiRadio][identityMatcher]',
})
export class TuiRadioDirective<T> {
    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    constructor() {
        const accessor = inject(RadioControlValueAccessor);
        const writeValue = accessor.writeValue.bind(accessor);

        accessor.writeValue = (value: T) => {
            if (this.identityMatcher(value, accessor.value)) {
                writeValue(accessor.value);
            } else {
                writeValue(value);
            }
        };
    }
}
