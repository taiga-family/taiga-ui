import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldSizeDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldSize]',
    providers: [tuiProvide(TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective)],
})
export class TuiTextfieldSizeDirective extends AbstractTuiController {
    @Input('tuiTextfieldSize')
    public size: TuiSizeL | TuiSizeS = 'l';
}
