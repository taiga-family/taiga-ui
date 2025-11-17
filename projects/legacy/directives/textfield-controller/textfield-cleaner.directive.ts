import {Directive, InjectionToken, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_CLEANER = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_CLEANER' : '',
    {
        factory: () => new TuiTextfieldCleanerDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldCleaner]',
    providers: [tuiProvide(TUI_TEXTFIELD_CLEANER, TuiTextfieldCleanerDirective)],
})
export class TuiTextfieldCleanerDirective extends AbstractTuiController {
    @Input('tuiTextfieldCleaner')
    public cleaner = false;
}
