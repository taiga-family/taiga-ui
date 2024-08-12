import {Directive, Input} from '@angular/core';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiController} from '@taiga-ui/legacy/classes';
import type {TuiTextareaExpandableTrigger} from '@taiga-ui/legacy/types/textarea';

export const TUI_TEXTFIELD_EXPANDABLE = tuiCreateTokenFromFactory(
    () => new TuiTextfieldExpandableTriggerDirective(),
);

@Directive({
    selector: '[tuiTextfieldExpandableTrigger]',
    providers: [
        tuiProvide(TUI_TEXTFIELD_EXPANDABLE, TuiTextfieldExpandableTriggerDirective),
    ],
})
export class TuiTextfieldExpandableTriggerDirective extends AbstractTuiController {
    @Input('tuiTextfieldExpandableTrigger')
    public trigger: TuiTextareaExpandableTrigger = null;
}
