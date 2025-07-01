import {Directive, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import {InjectionToken} from '@angular/core';

export const TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_APPEARANCE_DIRECTIVE' : '',
    {
        factory: () => new TuiTextfieldAppearanceDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldAppearance]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiTextfieldAppearanceDirective),
    ],
})
export class TuiTextfieldAppearanceDirective extends AbstractTuiController {
    // it's an empty string by default for backward compatibility
    // (see comment https://github.com/taiga-family/taiga-ui/pull/3007#issuecomment-1315179508)
    @Input('tuiTextfieldAppearance')
    public appearance = '';
}
