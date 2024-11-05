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
import {distinctUntilChanged, map, Observable, Subscription} from 'rxjs';

@Injectable()
export class TuiElasticStickyService extends Observable<number> {
    private readonly injector = inject(INJECTOR);
    private readonly el = tuiInjectElement();
    private readonly scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    constructor() {
        super((subscriber) => {
            const subscription = new Subscription();

            afterNextRender(
                () => {
                    const host = this.el.closest(SCROLL_REF_SELECTOR) || this.scrollRef;
                    const {offsetTop} = tuiGetElementOffset(host, this.el);
                    const {offsetHeight} = this.el;
                    const teardown = tuiScrollFrom(host)
                        .pipe(
                            map(() =>
                                Math.max(
                                    1 -
                                        Math.max(
                                            Math.round(host.scrollTop) - offsetTop,
                                            0,
                                        ) /
                                            offsetHeight,
                                    0,
                                ),
                            ),
                            distinctUntilChanged(),
                            tuiZoneOptimized(this.zone),
                            takeUntilDestroyed(this.destroyRef),
                        )
                        .subscribe(subscriber);

                    if (!subscription.closed) {
                        subscription.add(teardown);
                    } else {
                        teardown.unsubscribe();
                    }
                },
                {injector: this.injector},
            );

            return subscription;
        });
    }
}
