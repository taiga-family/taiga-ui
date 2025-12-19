import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {
    outputFromObservable,
    takeUntilDestroyed,
    toSignal,
} from '@angular/core/rxjs-interop';
import {tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {type TuiContext, type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SCROLL_REF} from '@taiga-ui/core/components/scrollbar';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

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
    private readonly service = inject(TuiPullToRefreshService);
    private readonly el = inject(TUI_SCROLL_REF).nativeElement;

    protected readonly pulling = toSignal(this.service, {initialValue: 0});
    protected readonly component = inject<PolymorpheusContent<TuiContext<number>>>(
        TUI_PULL_TO_REFRESH_COMPONENT,
    );

    protected readonly style = computed(() => this.styleHandler()(this.pulling()));
    protected readonly dropped = toSignal(
        this.service.pipe(
            map((distance) => distance <= MICRO_OFFSET || distance === this.threshold),
            distinctUntilChanged(),
        ),
    );

    public readonly styleHandler = input<
        TuiHandler<number, Record<string, unknown> | null>
    >(this.isIOS ? (distance) => ({top: tuiPx(distance / 2)}) : () => null);

    public readonly pulled = outputFromObservable(
        this.service.pipe(filter((distance) => distance === this.threshold)),
    );

    constructor() {
        if (this.component) {
            tuiScrollFrom(this.el)
                .pipe(startWith(null), tuiZonefree(), takeUntilDestroyed())
                .subscribe(() => {
                    this.el.style.setProperty(
                        'touch-action',
                        this.el.scrollTop ? '' : 'pan-down',
                    );
                });
        }
    }
}
