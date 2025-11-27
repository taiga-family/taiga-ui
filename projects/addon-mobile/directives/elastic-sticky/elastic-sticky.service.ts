import {
    afterNextRender,
    DestroyRef,
    inject,
    Injectable,
    INJECTOR,
    NgZone,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiScrollFrom, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {SCROLL_REF_SELECTOR} from '@taiga-ui/core/components/scrollbar';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {distinctUntilChanged, map, Observable, scan, Subscription} from 'rxjs';

@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    readonly #injector = inject(INJECTOR);
    readonly #el = tuiInjectElement();
    readonly #scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    readonly #destroyRef = inject(DestroyRef);
    readonly #zone = inject(NgZone);

    constructor() {
        super((subscriber) => {
            const subscription = new Subscription();

            afterNextRender(
                () => {
                    const teardown = tuiScrollFrom(this.#host)
                        .pipe(
                            scan(
                                (top) => (this.#pinned ? top : this.#offsetTop),
                                this.#offsetTop,
                            ),
                            map((top) =>
                                Math.max(
                                    1 -
                                        Math.max(
                                            Math.round(this.#host.scrollTop) - top,
                                            0,
                                        ) /
                                            this.#el.offsetHeight,
                                    0,
                                ),
                            ),
                            distinctUntilChanged(),
                            tuiZoneOptimized(this.#zone),
                            takeUntilDestroyed(this.#destroyRef),
                        )
                        .subscribe(subscriber);

                    if (!subscription.closed) {
                        subscription.add(teardown);
                    } else {
                        teardown.unsubscribe();
                    }
                },
                {injector: this.#injector},
            );

            return subscription;
        });
    }

    get #host(): Element {
        // TODO: Test if we still need it now, that templates pass injector
        return this.#el.closest(SCROLL_REF_SELECTOR) || this.#scrollRef;
    }

    get #offsetTop(): number {
        return tuiGetElementOffset(this.#host, this.#el).offsetTop;
    }

    get #pinned(): boolean {
        return (
            this.#el.getBoundingClientRect().top -
                this.#host.getBoundingClientRect().top ===
            0
        );
    }
}
