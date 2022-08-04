import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController, TuiInputType} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_TYPE = new InjectionToken<TuiTextfieldTypeDirective>(
    `tuiTextfieldType`,
    {
        factory: () => new TuiTextfieldTypeDirective(),
    },
);

@Directive({
    selector: `[tuiTextfieldType]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_TYPE,
            useExisting: forwardRef(() => TuiTextfieldTypeDirective),
        },
    ],
})
export class TuiTextfieldTypeDirective extends AbstractTuiController {
    @Input(`tuiTextfieldType`)
    type: TuiInputType = `text`;
}
