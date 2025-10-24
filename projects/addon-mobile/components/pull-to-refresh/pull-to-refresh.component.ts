import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {
    outputFromObservable,
    takeUntilDestroyed,
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import {tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {type TuiContext, type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, filter, map, type Observable, startWith} from 'rxjs';

import {
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_THRESHOLD,
} from './pull-to-refresh.providers';
import {MICRO_OFFSET, TuiPullToRefreshService} from './pull-to-refresh.service';

@Component({
    selector: 'tui-pull-to-refresh',
    imports: [PolymorpheusOutlet],
    templateUrl: './pull-to-refresh.template.html',
    styleUrl: './pull-to-refresh.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPullToRefreshService],
})
export class TuiPullToRefresh {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    protected readonly pulling = toSignal(inject(TuiPullToRefreshService), {
        initialValue: 0,
    });

    protected readonly component = inject<PolymorpheusContent<TuiContext<number>>>(
        TUI_PULL_TO_REFRESH_COMPONENT,
    );

    protected readonly dropped$: Observable<boolean> = toObservable(this.pulling).pipe(
        map((distance) => distance <= MICRO_OFFSET || distance === this.threshold),
        distinctUntilChanged(),
    );

    protected readonly dropped = toSignal(this.dropped$);

    protected readonly style = computed((styleHandler = this.styleHandler()) =>
        styleHandler(this.pulling()),
    );

    public readonly styleHandler = input<
        TuiHandler<number, Record<string, unknown> | null>
    >(this.isIOS ? (distance) => ({top: tuiPx(distance / 2)}) : () => null);

    public readonly pulled = outputFromObservable(
        inject(TuiPullToRefreshService).pipe(
            filter((distance) => distance === this.threshold),
        ),
    );

    constructor() {
        if (!this.component) {
            return; // Ensure scrolling down is impossible while pulling
        }

        const el: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;

        tuiScrollFrom(el)
            .pipe(startWith(null), tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
                if (el.scrollTop) {
                    el.style.touchAction = '';
                } else {
                    el.style.touchAction = 'pan-down';
                }
            });
    }
}
