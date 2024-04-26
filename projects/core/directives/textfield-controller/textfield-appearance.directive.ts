import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_APPEARANCE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldAppearanceDirective(),
);

@Directive({
    selector: '[tuiTextfieldAppearance]',
    providers: [tuiProvide(TUI_TEXTFIELD_APPEARANCE, TuiTextfieldAppearanceDirective)],
})
export class TuiTextfieldAppearanceDirective extends AbstractTuiController {
    // it's an empty string by default for backward compatibility
    // (see comment https://github.com/taiga-family/taiga-ui/pull/3007#issuecomment-1315179508)
    @Input('tuiTextfieldAppearance')
    public appearance = '';
}
