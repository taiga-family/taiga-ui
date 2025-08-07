import {type ElementRef} from '@angular/core';

import {type TuiAutofocusHandler, type TuiAutofocusOptions} from '../autofocus.options';

export abstract class AbstractTuiAutofocusHandler implements TuiAutofocusHandler {
    constructor(
        protected readonly el: ElementRef<HTMLElement>,
        protected readonly options: TuiAutofocusOptions,
    ) {}

    public abstract setFocus(): void;

    protected get element(): HTMLElement {
        // TODO: Remove when legacy controls are dropped
        const el = this.el.nativeElement.tagName.includes('-')
            ? this.el.nativeElement.querySelector<HTMLElement>(this.options.query)
            : this.el.nativeElement;

        return el || this.el.nativeElement;
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches(this.options.query);
    }
}
