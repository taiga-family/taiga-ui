import type {ViewportScroller} from '@angular/common';
import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc/tokens';
import {filter, noop, ReplaySubject, switchMap} from 'rxjs';

export class TuiViewportScroller implements ViewportScroller {
    private readonly document = inject(DOCUMENT);
    private readonly window = inject(WA_WINDOW);
    private readonly scroll$ = new ReplaySubject<Element>(1);
    public setOffset = noop;

    constructor() {
        inject(TUI_DOC_PAGE_LOADED)
            .pipe(
                filter(Boolean),
                switchMap(() => this.scroll$),
                takeUntilDestroyed(),
            )
            .subscribe((element) => element.scrollIntoView());
    }

    public scrollToAnchor(fragment: string): void {
        const nodes = fragment ? this.document.querySelectorAll(`#${fragment}`) : [];
        const element = nodes.length && nodes[nodes.length - 1];

        if (element) {
            this.scroll$.next(element);
        }
    }

    /**
     * Copy-pasted methods from {@link BrowserViewportScroller https://github.com/angular/angular/blob/main/packages/common/src/viewport_scroller.ts#L68}
     * (it is not public API)
     */
    public getScrollPosition(): [number, number] {
        return [this.window.scrollX, this.window.scrollY];
    }

    public scrollToPosition(position: [number, number]): void {
        this.window.scrollTo(position[0], position[1]);
    }

    public setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
        this.window.history.scrollRestoration = scrollRestoration;
    }
}
