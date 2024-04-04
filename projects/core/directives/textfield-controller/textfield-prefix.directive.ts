import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPrefixDirective(),
);

@Directive({
    selector: '[tuiTextfieldPrefix]',
    providers: [tuiProvide(TUI_TEXTFIELD_PREFIX, TuiTextfieldPrefixDirective)],
})
export class TuiTextfieldPrefixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPrefix')
    public prefix = '';
}
