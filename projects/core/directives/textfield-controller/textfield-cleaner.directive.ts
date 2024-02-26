import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldCleanerDirective(),
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
export class TuiTextfieldCleanerDirective extends AbstractTuiController {
    @Input('tuiTextfieldCleaner')
    public cleaner = false;
}
