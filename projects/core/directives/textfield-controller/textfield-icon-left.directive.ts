import {Directive, forwardRef, Input} from '@angular/core';
import {
    AbstractTuiController,
    TuiContext,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_ICON_LEFT = tuiCreateTokenFromFactory(
    () => new TuiTextfieldIconLeftDirective(),
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
    public iconLeft: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}
