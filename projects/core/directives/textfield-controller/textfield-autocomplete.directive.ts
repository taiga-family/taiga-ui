import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiAutofillFieldName, TuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_AUTOCOMPLETE = new InjectionToken<TuiTextfieldAutocompleteDirective>(
    'tuiTextfieldAutocomplete',
    {factory: autocompleteDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldAutocomplete]',
    providers: [
        {
            provide: TUI_TEXTFIELD_AUTOCOMPLETE,
            useExisting: forwardRef(() => TuiTextfieldAutocompleteDirective),
        },
    ],
})
export class TuiTextfieldAutocompleteDirective extends TuiController {
    @Input('tuiTextfieldAutocomplete')
    autocomplete: TuiAutofillFieldName | null = null;
}

export function autocompleteDirectiveFactory(): TuiTextfieldAutocompleteDirective {
    return new TuiTextfieldAutocompleteDirective();
}
