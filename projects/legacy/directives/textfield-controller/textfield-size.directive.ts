import {Directive, InjectionToken, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';

export const TUI_TEXTFIELD_SIZE = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_SIZE' : '',
    {
        factory: () => new TuiTextfieldSizeDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldSize]',
    providers: [tuiProvide(TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective)],
})
export class TuiTextfieldSizeDirective extends AbstractTuiController {
    @Input('tuiTextfieldSize')
    public size: TuiSizeL | TuiSizeS = 'l';
}
