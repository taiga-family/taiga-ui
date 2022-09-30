import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Output,
} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk/services';

import {TuiAutofilledStyleComponent} from './autofilled-style.component';

@Directive({
    selector: `[tuiAutofilledChange]`,
    host: {class: `tui-autofill`},
})
export class TuiAutofilledDirective {
    @HostBinding(`class._autofilled`)
    autofilled = false;

    @Output()
    readonly tuiAutofilledChange = new EventEmitter<boolean>();

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiAutofilledStyleComponent);
    }

    @HostListener(`transitionstart`, [`$event`])
    transitionStartHandler({propertyName, target}: TransitionEvent): void {
        const matchedAutofill =
            propertyName.includes(`box-shadow`) && (target as Element)?.matches(`input`);

        if (matchedAutofill) {
            this.autofilled = !this.autofilled;
            this.tuiAutofilledChange.emit(this.autofilled);
        }
    }
}
