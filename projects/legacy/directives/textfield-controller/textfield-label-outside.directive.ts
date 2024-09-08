import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldLabelOutsideDirective(),
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldLabelOutside]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, TuiTextfieldLabelOutsideDirective),
    ],
})
export class TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
    @Input('tuiTextfieldLabelOutside')
    public labelOutside = false;
}
