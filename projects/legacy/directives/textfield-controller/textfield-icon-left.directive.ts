import {Directive, Input} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_ICON_LEFT = tuiCreateTokenFromFactory(
    () => new TuiTextfieldIconLeftDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldIconLeft]',
    providers: [tuiProvide(TUI_TEXTFIELD_ICON_LEFT, TuiTextfieldIconLeftDirective)],
})
export class TuiTextfieldIconLeftDirective extends AbstractTuiController {
    @Input('tuiTextfieldIconLeft')
    public iconStart: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}
