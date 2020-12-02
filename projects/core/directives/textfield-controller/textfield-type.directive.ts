import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiInputType} from '@taiga-ui/cdk';
import {Controller} from '@taiga-ui/core/abstract';

export const TUI_TEXTFIELD_TYPE = new InjectionToken<TuiTextfieldTypeDirective>(
    'tuiTextfieldType',
    {factory: typeDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldType]',
    providers: [
        {
            provide: TUI_TEXTFIELD_TYPE,
            useExisting: forwardRef(() => TuiTextfieldTypeDirective),
        },
    ],
})
export class TuiTextfieldTypeDirective extends Controller {
    @Input('tuiTextfieldType')
    type: TuiInputType = TuiInputType.Text;
}

export function typeDirectiveFactory(): TuiTextfieldTypeDirective {
    return new TuiTextfieldTypeDirective();
}
