import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_POSTFIX = new InjectionToken<TuiTextfieldPostfixDirective>(
    '[TUI_TEXTFIELD_POSTFIX]: tuiTextfieldPostfix',
    {
        factory: () => new TuiTextfieldPostfixDirective(),
    },
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
    postfix = '';
}
