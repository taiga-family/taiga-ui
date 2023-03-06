import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_FILLER = new InjectionToken<TuiTextfieldFillerDirective>(
    '[TUI_TEXTFIELD_FILLER]',
    {
        factory: () => new TuiTextfieldFillerDirective(),
    },
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
    filler = '';
}
