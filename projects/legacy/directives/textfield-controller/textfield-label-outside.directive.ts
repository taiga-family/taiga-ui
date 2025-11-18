import {Directive, InjectionToken, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_LABEL_OUTSIDE = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_LABEL_OUTSIDE' : '',
    {
        factory: () => new TuiTextfieldLabelOutsideDirective(),
    },
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
