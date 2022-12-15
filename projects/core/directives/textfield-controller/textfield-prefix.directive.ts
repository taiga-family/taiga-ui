import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_PREFIX = new InjectionToken<TuiTextfieldPrefixDirective>(
    `[TUI_TEXTFIELD_PREFIX]: tuiTextfieldPrefix`,
    {
        factory: () => new TuiTextfieldPrefixDirective(),
    },
);

@Directive({
    selector: `[tuiTextfieldPrefix]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_PREFIX,
            useExisting: forwardRef(() => TuiTextfieldPrefixDirective),
        },
    ],
})
export class TuiTextfieldPrefixDirective extends AbstractTuiController {
    @Input(`tuiTextfieldPrefix`)
    prefix = ``;
}
