import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {AbstractTuiController} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_ICON_LEFT = new InjectionToken<TuiTextfieldIconLeftDirective>(
    '[TUI_TEXTFIELD_ICON_LEFT]',
    {
        factory: tuiIconLeftDirectiveFactory,
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
    iconLeft: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> = '';
}

export function tuiIconLeftDirectiveFactory(): TuiTextfieldIconLeftDirective {
    return new TuiTextfieldIconLeftDirective();
}
