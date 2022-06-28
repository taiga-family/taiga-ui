import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_CLEANER = new InjectionToken<TuiTextfieldCleanerDirective>(
    'tuiTextfieldCleaner',
    {
        factory: cleanerDirectiveFactory,
    },
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
export class TuiTextfieldCleanerDirective extends TuiController {
    @Input('tuiTextfieldCleaner')
    cleaner = false;
}

/**
 * @deprecated: use {@link tuiCleanerDirectiveFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function cleanerDirectiveFactory(): TuiTextfieldCleanerDirective {
    return new TuiTextfieldCleanerDirective();
}

export const tuiCleanerDirectiveFactory = cleanerDirectiveFactory;
