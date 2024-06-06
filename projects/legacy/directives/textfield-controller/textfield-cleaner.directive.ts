import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldCleanerDirective(),
);

@Directive({
    selector: '[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_CLEANER, TuiTextfieldCleanerDirective)],
})
export class TuiTextfieldCleanerDirective extends AbstractTuiController {
    @Input('tuiTextfieldCleaner')
    public cleaner = false;
}
