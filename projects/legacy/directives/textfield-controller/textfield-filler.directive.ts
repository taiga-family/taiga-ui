import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldFillerDirective(),
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
