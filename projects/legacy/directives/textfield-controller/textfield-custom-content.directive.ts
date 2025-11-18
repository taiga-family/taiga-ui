import {Directive, InjectionToken, Input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_TEXTFIELD_CUSTOM_CONTENT = new InjectionToken(
    ngDevMode ? 'TUI_TEXTFIELD_CUSTOM_CONTENT' : '',
    {
        factory: () => new TuiTextfieldCustomContentDirective(),
    },
);

@Directive({
    standalone: false,
    selector: '[tuiTextfieldCustomContent]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, TuiTextfieldCustomContentDirective),
    ],
})
export class TuiTextfieldCustomContentDirective extends AbstractTuiController {
    @Input('tuiTextfieldCustomContent')
    public customContent: PolymorpheusContent;
}
