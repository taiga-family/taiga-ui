import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldFillerDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldFiller]',
    providers: [tuiProvide(TUI_TEXTFIELD_FILLER, TuiTextfieldFillerDirective)],
})
export class TuiTextfieldFillerDirective extends AbstractTuiController {
    @Input('tuiTextfieldFiller')
    public filler = '';
}
