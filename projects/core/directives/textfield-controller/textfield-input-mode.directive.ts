import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiInputMode} from '@taiga-ui/cdk';
import {Controller} from '@taiga-ui/core/abstract';

export const TUI_TEXTFIELD_INPUT_MODE = new InjectionToken<TuiTextfieldInputModeDirective>(
    'tuiTextfieldInputMode',
    {factory: inputModeDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldInputMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_INPUT_MODE,
            useExisting: forwardRef(() => TuiTextfieldInputModeDirective),
        },
    ],
})
export class TuiTextfieldInputModeDirective extends Controller {
    @Input('tuiTextfieldInputMode')
    inputMode: TuiInputMode = TuiInputMode.Text;
}

export function inputModeDirectiveFactory(): TuiTextfieldInputModeDirective {
    return new TuiTextfieldInputModeDirective();
}
