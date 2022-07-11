import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController, TuiAutofillFieldName} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_AUTOCOMPLETE =
    new InjectionToken<TuiTextfieldAutocompleteDirective>('tuiTextfieldAutocomplete', {
        factory: autocompleteDirectiveFactory,
    });

@Directive({
    selector: '[tuiTextfieldAutocomplete]',
    providers: [
        {
            provide: TUI_TEXTFIELD_AUTOCOMPLETE,
            useExisting: forwardRef(() => TuiTextfieldAutocompleteDirective),
        },
    ],
})
export class TuiTextfieldAutocompleteDirective extends AbstractTuiController {
    @Input('tuiTextfieldAutocomplete')
    autocomplete: TuiAutofillFieldName | '' = '';
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function autocompleteDirectiveFactory(): TuiTextfieldAutocompleteDirective {
    return new TuiTextfieldAutocompleteDirective();
}
