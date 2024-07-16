import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldCleanerDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_CLEANER, TuiTextfieldCleanerDirective)],
})
export class TuiTextfieldCleanerDirective extends AbstractTuiController {
    @Input('tuiTextfieldCleaner')
    public cleaner = false;
}
