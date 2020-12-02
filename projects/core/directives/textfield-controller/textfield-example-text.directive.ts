import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {Controller} from '@taiga-ui/core/abstract';

export const TUI_TEXTFIELD_EXAMPLE_TEXT = new InjectionToken<TuiTextfieldExampleTextDirective>(
    'tuiTextfieldExampleText',
    {factory: exampleTextDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldExampleText]',
    providers: [
        {
            provide: TUI_TEXTFIELD_EXAMPLE_TEXT,
            useExisting: forwardRef(() => TuiTextfieldExampleTextDirective),
        },
    ],
})
export class TuiTextfieldExampleTextDirective extends Controller {
    @Input('tuiTextfieldExampleText')
    exampleText = '';
}

export function exampleTextDirectiveFactory(): TuiTextfieldExampleTextDirective {
    return new TuiTextfieldExampleTextDirective();
}
