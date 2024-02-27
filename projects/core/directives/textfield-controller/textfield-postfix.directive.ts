import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPostfixDirective(),
);

@Directive({
    selector: '[tuiTextfieldPostfix]',
    providers: [
        {
            provide: TUI_TEXTFIELD_POSTFIX,
            useExisting: forwardRef(() => TuiTextfieldPostfixDirective),
        },
    ],
})
export class TuiTextfieldPostfixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPostfix')
    public postfix = '';
}
