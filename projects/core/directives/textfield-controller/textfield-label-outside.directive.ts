import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldLabelOutsideDirective(),
);

@Directive({
    selector: '[tuiTextfieldLabelOutside]',
    providers: [
        {
            provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
            useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective),
        },
    ],
})
export class TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
    @Input('tuiTextfieldLabelOutside')
    public labelOutside = false;
}
