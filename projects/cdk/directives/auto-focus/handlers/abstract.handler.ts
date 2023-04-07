import {Directive, ElementRef} from '@angular/core';
import {
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk/interfaces';

import type {TuiAutofocusHandler} from '../autofocus.options';

@Directive()
export abstract class AbstractTuiAutofocusHandler implements TuiAutofocusHandler {
    constructor(
        protected readonly focusable: TuiFocusableElementAccessor | null,
        protected readonly el: ElementRef<HTMLElement>,
    ) {}

    protected get element(): TuiNativeFocusableElement {
        return this.focusable?.nativeFocusableElement || this.el.nativeElement;
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches(`input, textarea`);
    }

    abstract setFocus(): void;
}
