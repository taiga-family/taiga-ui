import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {Controller} from '@taiga-ui/core/abstract';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export const TUI_TEXTFIELD_SIZE = new InjectionToken<TuiTextfieldSizeDirective>(
    'tuiTextfieldSize',
    {factory: sizeDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldSize]',
    providers: [
        {
            provide: TUI_TEXTFIELD_SIZE,
            useExisting: forwardRef(() => TuiTextfieldSizeDirective),
        },
    ],
})
export class TuiTextfieldSizeDirective extends Controller {
    @Input('tuiTextfieldSize')
    size: TuiSizeS | TuiSizeL = 'l';
}

export function sizeDirectiveFactory(): TuiTextfieldSizeDirective {
    return new TuiTextfieldSizeDirective();
}
