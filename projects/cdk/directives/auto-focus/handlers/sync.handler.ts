import {Directive, ElementRef, Inject, Optional, Self} from '@angular/core';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {AbstractTuiAutofocusHandler} from './abstract.handler';

@Directive()
export class TuiSynchronousAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
    ) {
        super(tuiFocusableComponent, elementRef);
    }

    setFocus(): void {
        this.element.focus();
    }
}
