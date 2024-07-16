import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPrefixDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldPrefix]',
    providers: [tuiProvide(TUI_TEXTFIELD_PREFIX, TuiTextfieldPrefixDirective)],
})
export class TuiTextfieldPrefixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPrefix')
    public prefix = '';
}
