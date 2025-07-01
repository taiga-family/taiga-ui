import {Directive, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import {InjectionToken} from '@angular/core';

export const TUI_TEXTFIELD_PREFIX = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_PREFIX' : '',
    {
        factory: () => new TuiTextfieldPrefixDirective(),
    },
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
