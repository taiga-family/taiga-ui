import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {Controller} from '@taiga-ui/core/abstract';

export const TUI_TEXTFIELD_LABEL_OUTSIDE = new InjectionToken<TuiTextfieldLabelOutsideDirective>(
    'tuiTextfieldLabelOutside',
    {factory: labelOutsideDirectiveFactory},
);

@Directive({
    selector: '[tuiTextfieldLabelOutside]',
    providers: [
        {
            provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
            useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective),
        },
    ],
})
export class TuiTextfieldLabelOutsideDirective extends Controller {
    @Input('tuiTextfieldLabelOutside')
    labelOutside = false;
}

export function labelOutsideDirectiveFactory(): TuiTextfieldLabelOutsideDirective {
    return new TuiTextfieldLabelOutsideDirective();
}
