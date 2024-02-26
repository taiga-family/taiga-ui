import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

// TODO: rename to TUI_TEXTFIELD_APPEARANCE in v4
export const TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldAppearanceDirective(),
);

@Directive({
    selector: '[tuiTextfieldAppearance]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
            useExisting: forwardRef(() => TuiTextfieldAppearanceDirective),
        },
    ],
})
export class TuiTextfieldAppearanceDirective extends AbstractTuiController {
    // it's an empty string by default for backward compatibility
    // (see comment https://github.com/taiga-family/taiga-ui/pull/3007#issuecomment-1315179508)
    @Input('tuiTextfieldAppearance')
    public appearance = '';
}
