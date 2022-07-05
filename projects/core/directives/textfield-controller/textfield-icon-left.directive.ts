import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {AbstractTuiController, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_ICON_LEFT = new InjectionToken<TuiTextfieldIconLeftDirective>(
    'tuiTextfieldIconLeft',
    {
        factory: iconLeftDirectiveFactory,
    },
);

@Directive({
    selector: '[tuiTextfieldIconLeft]',
    providers: [
        {
            provide: TUI_TEXTFIELD_ICON_LEFT,
            useExisting: forwardRef(() => TuiTextfieldIconLeftDirective),
        },
    ],
})
export class TuiTextfieldIconLeftDirective extends AbstractTuiController {
    @Input('tuiTextfieldIconLeft')
    iconLeft: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> = '';
}

export function iconLeftDirectiveFactory(): TuiTextfieldIconLeftDirective {
    return new TuiTextfieldIconLeftDirective();
}
