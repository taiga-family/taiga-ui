import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_CUSTOM_CONTENT =
    new InjectionToken<TuiTextfieldCustomContentDirective>(`tuiTextfieldCustomContent`, {
        factory: () => new TuiTextfieldCustomContentDirective(),
    });

@Directive({
    selector: `[tuiTextfieldCustomContent]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_CUSTOM_CONTENT,
            useExisting: forwardRef(() => TuiTextfieldCustomContentDirective),
        },
    ],
})
export class TuiTextfieldCustomContentDirective extends AbstractTuiController {
    @Input(`tuiTextfieldCustomContent`)
    customContent: PolymorpheusContent = ``;
}
