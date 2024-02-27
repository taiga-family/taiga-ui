import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(
    () => new TuiTextfieldFillerDirective(),
);

@Directive({
    selector: '[tuiTextfieldFiller]',
    providers: [
        {
            provide: TUI_TEXTFIELD_FILLER,
            useExisting: forwardRef(() => TuiTextfieldFillerDirective),
        },
    ],
})
export class TuiTextfieldFillerDirective extends AbstractTuiController {
    @Input('tuiTextfieldFiller')
    public filler = '';
}
