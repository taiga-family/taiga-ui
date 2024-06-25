import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TEXTFIELD_CUSTOM_CONTENT = tuiCreateTokenFromFactory(
    () => new TuiTextfieldCustomContentDirective(),
);

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: '[tuiTextfieldCustomContent]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, TuiTextfieldCustomContentDirective),
    ],
})
export class TuiTextfieldCustomContentDirective extends AbstractTuiController {
    @Input('tuiTextfieldCustomContent')
    public customContent: PolymorpheusContent;
}
