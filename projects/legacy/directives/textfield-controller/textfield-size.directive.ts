import {Directive, Input} from '@angular/core';
import {
    AbstractTuiController,
    tuiCreateTokenFromFactory,
    tuiProvide,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export const TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldSizeDirective(),
);

@Directive({
    selector: '[tuiTextfieldSize]',
    providers: [tuiProvide(TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective)],
})
export class TuiTextfieldSizeDirective extends AbstractTuiController {
    @Input('tuiTextfieldSize')
    public size: TuiSizeL | TuiSizeS = 'l';
}
