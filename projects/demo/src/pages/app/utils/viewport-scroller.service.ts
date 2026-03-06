import {DOCUMENT, type ViewportScroller} from '@angular/common';
import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {filter, noop, ReplaySubject, switchMap} from 'rxjs';

export class TuiViewportScroller implements ViewportScroller {
    readonly #doc = inject(DOCUMENT);
    readonly #win = inject(WA_WINDOW);
    readonly #scroll$ = new ReplaySubject<Element>(1);
    public setOffset = noop;

    constructor() {
        inject(TUI_DOC_PAGE_LOADED)
            .pipe(
                filter(Boolean),
                switchMap(() => this.#scroll$),
                takeUntilDestroyed(),
            )
            .subscribe((element) => element.scrollIntoView());
    }

    public scrollToAnchor(fragment: string): void {
        const nodes = fragment ? this.#doc.querySelectorAll(`#${fragment}`) : [];
        const element = nodes.length && nodes[nodes.length - 1];

        if (element) {
            this.#scroll$.next(element);
        }
    }

    /**
     * Copy-pasted methods from {@link BrowserViewportScroller https://github.com/angular/angular/blob/main/packages/common/src/viewport_scroller.ts#L68}
     * (it is not public API)
     */
    public getScrollPosition(): [number, number] {
        return [this.#win.scrollX, this.#win.scrollY];
    }

    public scrollToPosition(position: [number, number]): void {
        this.#win.scrollTo(position[0], position[1]);
    }

    public setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
        this.#win.history.scrollRestoration = scrollRestoration;
    }
}
