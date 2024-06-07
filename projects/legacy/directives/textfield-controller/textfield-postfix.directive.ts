import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPostfixDirective(),
);

@Directive({
    selector: '[tuiTextfieldPostfix]',
    providers: [tuiProvide(TUI_TEXTFIELD_POSTFIX, TuiTextfieldPostfixDirective)],
})
export class TuiTextfieldPostfixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPostfix')
    public postfix = '';
}
