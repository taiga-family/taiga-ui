import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

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
