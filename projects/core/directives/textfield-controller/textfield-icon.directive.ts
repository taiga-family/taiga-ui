import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_ICON = new InjectionToken<TuiTextfieldIconDirective>(
    'tuiTextfieldIcon',
    {
        factory: iconDirectiveFactory,
    },
);

@Directive({
    selector: '[tuiTextfieldIcon]',
    providers: [
        {
            provide: TUI_TEXTFIELD_ICON,
            useExisting: forwardRef(() => TuiTextfieldIconDirective),
        },
    ],
})
export class TuiTextfieldIconDirective extends AbstractTuiController {
    @Input('tuiTextfieldIcon')
    icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> = '';
}

export function iconDirectiveFactory(): TuiTextfieldIconDirective {
    return new TuiTextfieldIconDirective();
}
