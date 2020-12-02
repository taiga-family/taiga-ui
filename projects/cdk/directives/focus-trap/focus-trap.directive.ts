import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    OnDestroy,
    Renderer2,
} from '@angular/core';
import {containsOrAfter} from '@taiga-ui/cdk/utils/dom';
import {
    blurNativeFocused,
    getClosestKeyboardFocusable,
    getNativeFocused,
    setNativeFocused,
} from '@taiga-ui/cdk/utils/focus';

@Directive({
    selector: '[tuiFocusTrap]',
    host: {
        tabIndex: '0',
    },
})
export class TuiFocusTrapDirective implements AfterViewInit, OnDestroy {
    private readonly activeElement = getNativeFocused(this.documentRef);

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {
        if (this.activeElement instanceof HTMLElement) {
            setNativeFocused(this.activeElement, false);
        }
    }

    ngAfterViewInit() {
        setNativeFocused(this.elementRef.nativeElement);
    }

    @HostListener('blur')
    onBlur() {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'tabIndex');
    }

    @HostListener('window:focusin.silent', ['$event.target'])
    onFocusIn(node: Node) {
        if (containsOrAfter(this.elementRef.nativeElement, node)) {
            return;
        }

        const focusable = getClosestKeyboardFocusable(
            this.elementRef.nativeElement,
            false,
            this.elementRef.nativeElement,
        );

        if (focusable) {
            setNativeFocused(focusable);
        }
    }

    ngOnDestroy() {
        blurNativeFocused(this.documentRef);

        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle, so using Promise instead of setTimeout
         */
        Promise.resolve().then(() => {
            if (this.activeElement instanceof HTMLElement) {
                setNativeFocused(this.activeElement);
            }
        });
    }
}
