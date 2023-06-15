import {Directive, ElementRef, Inject, Optional, Self} from '@angular/core';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

@Directive()
export class TuiSynchronousAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        focusable: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
    ) {
        super(focusable, el);
    }

    setFocus(): void {
        this.element.focus();
    }
}
