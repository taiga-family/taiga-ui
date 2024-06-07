import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldFillerDirective(),
);

@Directive({
    selector: '[tuiTextfieldFiller]',
    providers: [tuiProvide(TUI_TEXTFIELD_FILLER, TuiTextfieldFillerDirective)],
})
export class TuiTextfieldFillerDirective extends AbstractTuiController {
    @Input('tuiTextfieldFiller')
    public filler = '';
}
