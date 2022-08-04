import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_CLEANER = new InjectionToken<TuiTextfieldCleanerDirective>(
    `tuiTextfieldCleaner`,
    {
        factory: () => new TuiTextfieldCleanerDirective(),
    },
);

@Directive({
    selector: `[tuiTextfieldCleaner]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_CLEANER,
            useExisting: forwardRef(() => TuiTextfieldCleanerDirective),
        },
    ],
})
export class TuiTextfieldCleanerDirective extends AbstractTuiController {
    @Input(`tuiTextfieldCleaner`)
    cleaner = false;
}
