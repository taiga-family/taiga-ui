import {Directive, InjectionToken, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_FILLER = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_FILLER' : '',
    {
        factory: () => new TuiTextfieldFillerDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldFiller]',
    providers: [tuiProvide(TUI_TEXTFIELD_FILLER, TuiTextfieldFillerDirective)],
})
export class TuiTextfieldFillerDirective extends AbstractTuiController {
    @Input('tuiTextfieldFiller')
    public filler = '';
}
