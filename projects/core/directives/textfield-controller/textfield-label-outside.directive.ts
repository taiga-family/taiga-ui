import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_LABEL_OUTSIDE =
    new InjectionToken<TuiTextfieldLabelOutsideDirective>(`tuiTextfieldLabelOutside`, {
        factory: labelOutsideDirectiveFactory,
    });

@Directive({
    selector: `[tuiTextfieldLabelOutside]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
            useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective),
        },
    ],
})
export class TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
    @Input(`tuiTextfieldLabelOutside`)
    labelOutside = false;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function labelOutsideDirectiveFactory(): TuiTextfieldLabelOutsideDirective {
    return new TuiTextfieldLabelOutsideDirective();
}
