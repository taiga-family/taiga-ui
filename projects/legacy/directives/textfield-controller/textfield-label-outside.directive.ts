import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldLabelOutsideDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldLabelOutside]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, TuiTextfieldLabelOutsideDirective),
    ],
})
export class TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
    @Input('tuiTextfieldLabelOutside')
    public labelOutside = false;
}
