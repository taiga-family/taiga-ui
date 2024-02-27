import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractTuiController, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPrefixDirective(),
);

@Directive({
    selector: '[tuiTextfieldPrefix]',
    providers: [
        {
            provide: TUI_TEXTFIELD_PREFIX,
            useExisting: forwardRef(() => TuiTextfieldPrefixDirective),
        },
    ],
})
export class TuiTextfieldPrefixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPrefix')
    public prefix = '';
}
