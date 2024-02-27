import {Directive, forwardRef, Input} from '@angular/core';
import {
    AbstractTuiController,
    TuiContext,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_TEXTFIELD_ICON = tuiCreateTokenFromFactory(
    () => new TuiTextfieldIconDirective(),
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
    public icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
}
