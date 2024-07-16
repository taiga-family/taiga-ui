import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPostfixDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldPostfix]',
    providers: [tuiProvide(TUI_TEXTFIELD_POSTFIX, TuiTextfieldPostfixDirective)],
})
export class TuiTextfieldPostfixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPostfix')
    public postfix = '';
}
