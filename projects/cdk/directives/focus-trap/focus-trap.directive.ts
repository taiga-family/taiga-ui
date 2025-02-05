import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {
    tuiContainsOrAfter,
    tuiInjectElement,
    tuiIsHTMLElement,
} from '@taiga-ui/cdk/utils/dom';
import {
    tuiBlurNativeFocused,
    tuiGetClosestFocusable,
    tuiGetNativeFocused,
} from '@taiga-ui/cdk/utils/focus';

@Directive({
    standalone: true,
    selector: '[tuiFocusTrap]',
    host: {
        tabIndex: '0',
        '(window:focusin.zoneless)': 'initialized && onFocusIn($event.target)',
    },
})
export class TuiFocusTrap implements OnDestroy {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private activeElement: Element | null = null;
    protected initialized = false;

    constructor() {
        /**
         * This would cause currently focused element to lose focus,
         * but it might cause ExpressionChanged error due to potential HostBinding.
         * Microtask keeps it in the same frame but allows change detection to run
         */
        Promise.resolve().then(() => {
            /**
             * The same event can synchronously close already opened focus trap and open another one.
             * All focus traps have microtask inside its `ngOnDestroy` –
             * they should be resolved before enabling of new focus trap.
             * Don't enable any new event listeners before `initialized` equals to `true`!
             */
            this.initialized = true;
            this.activeElement = tuiGetNativeFocused(this.doc);
            this.el.focus();
        });
    }

    public ngOnDestroy(): void {
        tuiBlurNativeFocused(this.doc);

        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle,
         * therefore using Promise instead of setTimeout
         */
        Promise.resolve().then(() => {
            if (tuiIsHTMLElement(this.activeElement)) {
                this.activeElement.focus();
            }
        });
    }

    protected onFocusIn(node: Node): void {
        const firstElementChild = this.el.firstElementChild;

        if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
            tuiGetClosestFocusable({
                initial: firstElementChild,
                root: this.el,
            })?.focus();
        }
    }
}
