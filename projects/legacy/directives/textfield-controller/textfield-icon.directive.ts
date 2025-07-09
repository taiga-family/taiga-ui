import {Directive, InjectionToken, Input} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_TEXTFIELD_ICON = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_ICON' : '',
    {
        factory: () => new TuiTextfieldIconDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldIcon]',
    providers: [tuiProvide(TUI_TEXTFIELD_ICON, TuiTextfieldIconDirective)],
})
export class TuiTextfieldIconDirective extends AbstractTuiController {
    @Input('tuiTextfieldIcon')
    public icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}
