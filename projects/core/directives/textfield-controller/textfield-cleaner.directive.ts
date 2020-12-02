import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {Controller} from '@taiga-ui/core/abstract';

export const TUI_TEXTFIELD_CLEANER = new InjectionToken<TuiTextfieldCleanerDirective>(
    'tuiTextfieldCleaner',
    {factory: cleanerDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldCleaner]',
    providers: [
        {
            provide: TUI_TEXTFIELD_CLEANER,
            useExisting: forwardRef(() => TuiTextfieldCleanerDirective),
        },
    ],
})
export class TuiTextfieldCleanerDirective extends Controller {
    @Input('tuiTextfieldCleaner')
    cleaner = false;
}

export function cleanerDirectiveFactory(): TuiTextfieldCleanerDirective {
    return new TuiTextfieldCleanerDirective();
}
