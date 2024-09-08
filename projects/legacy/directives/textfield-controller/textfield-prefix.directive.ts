import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(
    () => new TuiTextfieldPrefixDirective(),
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldPrefix]',
    providers: [tuiProvide(TUI_TEXTFIELD_PREFIX, TuiTextfieldPrefixDirective)],
})
export class TuiTextfieldPrefixDirective extends AbstractTuiController {
    @Input('tuiTextfieldPrefix')
    public prefix = '';
}
