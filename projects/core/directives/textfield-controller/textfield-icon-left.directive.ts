import {Directive, forwardRef, Input} from '@angular/core';
import {
    AbstractTuiController,
    type TuiContext,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
