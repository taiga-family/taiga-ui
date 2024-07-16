import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldAppearanceDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
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
