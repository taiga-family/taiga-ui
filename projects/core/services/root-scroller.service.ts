import {ViewportScroller} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

// TODO: fix cross-import between SEPs
type TuiRootComponent = any;

@Injectable({
    providedIn: 'root',
})
export class TuiRootScroller implements ViewportScroller {
    private root: TuiRootComponent | null = null;

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    register(root: TuiRootComponent) {
        this.root = root;
    }

    setOffset() {}

    getScrollPosition(): [number, number] {
        const {scrollRef} = this;

        return scrollRef ? [scrollRef.scrollLeft, scrollRef.scrollTop] : [0, 0];
    }

    scrollToPosition([scrollLeft, scrollTop]: [number, number]) {
        const {scrollRef} = this;

        if (!scrollRef) {
            return;
        }

        scrollRef.scrollLeft = scrollLeft;
        scrollRef.scrollTop = scrollTop;
    }

    scrollToAnchor(anchor: string) {
        const element = this.scrollRef && this.scrollRef.querySelector(`#${anchor}`);

        if (element) {
            element.scrollIntoView();
        }
    }

    setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual') {
        const {history} = this.windowRef;

        if (history && history.scrollRestoration) {
            history.scrollRestoration = scrollRestoration;
        }
    }

    private get scrollRef(): HTMLElement | null {
        return this.root && this.root.elementRef.nativeElement;
    }
}
