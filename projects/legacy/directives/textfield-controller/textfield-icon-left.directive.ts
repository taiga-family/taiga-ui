import {Directive, Input} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

export const TUI_TEXTFIELD_ICON_LEFT = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_ICON_LEFT' : '',
    {
        factory: () => new TuiTextfieldIconLeftDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldIconLeft]',
    providers: [tuiProvide(TUI_TEXTFIELD_ICON_LEFT, TuiTextfieldIconLeftDirective)],
})
export class TuiTextfieldIconLeftDirective extends AbstractTuiController {
    @Input('tuiTextfieldIconLeft')
    public iconStart: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}
