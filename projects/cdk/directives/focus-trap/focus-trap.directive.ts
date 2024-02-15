import {DOCUMENT} from '@angular/common';
import {
    Directive,
    ElementRef,
    HostListener,
    inject,
    OnDestroy,
    Renderer2,
} from '@angular/core';
import {tuiContainsOrAfter, tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiBlurNativeFocused,
    tuiGetClosestFocusable,
    tuiGetNativeFocused,
} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: '[tuiFocusTrap]',
    host: {
        tabIndex: '0',
    },
})
export class TuiFocusTrapDirective implements OnDestroy {
    private readonly doc = inject(DOCUMENT);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly renderer = inject(Renderer2);
    private readonly activeElement = tuiGetNativeFocused(this.doc);

    constructor() {
        /**
         * This would cause currently focused element to lose focus,
         * but it might cause ExpressionChanged error due to potential HostBinding.
         * Microtask keeps it in the same frame but allows change detection to run
         */
        void Promise.resolve().then(() => this.el.focus());
    }

    @HostListener('blur')
    onBlur(): void {
        this.renderer.removeAttribute(this.el, 'tabIndex');
    }

    @HostListener('window:focusin.silent', ['$event.target'])
    onFocusIn(node: Node): void {
        if (tuiContainsOrAfter(this.el, node)) {
            return;
        }

        const focusable = tuiGetClosestFocusable({
            initial: this.el,
            root: this.el,
        });

        if (focusable) {
            focusable.focus();
        }
    }

    ngOnDestroy(): void {
        tuiBlurNativeFocused(this.doc);

        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle,
         * therefore using Promise instead of setTimeout
         */
        // eslint-disable-next-line
        Promise.resolve().then(() => {
            if (tuiIsHTMLElement(this.activeElement)) {
                this.activeElement.focus();
            }
        });
    }
}
