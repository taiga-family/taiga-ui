import {Directive, ElementRef} from '@angular/core';
import {
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk/interfaces';

import {TuiAutofocusHandler} from '../autofocus.options';

@Directive()
export abstract class AbstractTuiAutofocusHandler implements TuiAutofocusHandler {
    protected constructor(
        protected readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,
        protected readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    protected get element(): TuiNativeFocusableElement {
        return (
            this.tuiFocusableComponent?.nativeFocusableElement ||
            this.elementRef.nativeElement
        );
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches(`input, textarea`);
    }

    abstract setFocus(): void;
}
