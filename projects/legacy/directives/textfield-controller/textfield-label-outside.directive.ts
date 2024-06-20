import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldLabelOutsideDirective(),
);

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
