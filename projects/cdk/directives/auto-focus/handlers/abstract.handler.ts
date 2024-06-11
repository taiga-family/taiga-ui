import type {ElementRef} from '@angular/core';

import type {TuiAutofocusHandler} from '../autofocus.options';

export abstract class AbstractTuiAutofocusHandler implements TuiAutofocusHandler {
    constructor(protected readonly el: ElementRef<HTMLElement>) {}

    public abstract setFocus(): void;

    protected get element(): HTMLElement {
        return this.el.nativeElement;
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches('input, textarea, [contenteditable]');
    }
}
