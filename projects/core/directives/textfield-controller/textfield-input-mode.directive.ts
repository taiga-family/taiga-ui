import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController, TuiInputMode} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_INPUT_MODE =
    new InjectionToken<TuiTextfieldInputModeDirective>(`tuiTextfieldInputMode`, {
        factory: inputModeDirectiveFactory,
    });

@Directive({
    selector: `[tuiTextfieldInputMode]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_INPUT_MODE,
            useExisting: forwardRef(() => TuiTextfieldInputModeDirective),
        },
    ],
})
export class TuiTextfieldInputModeDirective extends AbstractTuiController {
    @Input(`tuiTextfieldInputMode`)
    inputMode: TuiInputMode = `text`;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function inputModeDirectiveFactory(): TuiTextfieldInputModeDirective {
    return new TuiTextfieldInputModeDirective();
}
