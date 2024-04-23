import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    NgZone,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiContext, TuiHandler} from '@taiga-ui/cdk';
import {TUI_IS_IOS, tuiPx, tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

import {
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_THRESHOLD,
} from './pull-to-refresh.providers';
import {MICRO_OFFSET, TuiPullToRefreshService} from './pull-to-refresh.service';

@Component({
    selector: 'tui-pull-to-refresh',
    templateUrl: './pull-to-refresh.template.html',
    styleUrls: ['./pull-to-refresh.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPullToRefreshService],
})
export class TuiPullToRefreshComponent {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);

    @Input()
    public styleHandler: TuiHandler<number, Record<string, any> | null> = this.isIOS
        ? distance => ({top: tuiPx(distance / 2)})
        : () => null;

    @Output()
    public readonly pulled: Observable<unknown> = inject(TuiPullToRefreshService).pipe(
        filter(distance => distance === this.threshold),
    );

    protected readonly pulling$ = inject(TuiPullToRefreshService);

    protected readonly component = inject<PolymorpheusContent<TuiContext<number>>>(
        TUI_PULL_TO_REFRESH_COMPONENT,
    );

    protected readonly dropped$: Observable<boolean> = this.pulling$.pipe(
        map(distance => distance <= MICRO_OFFSET || distance === this.threshold),
        distinctUntilChanged(),
    );

    constructor() {
        if (!this.component) {
            return; // Ensure scrolling down is impossible while pulling
        }

        const el: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;

        tuiScrollFrom(el)
            .pipe(startWith(null), tuiZonefree(inject(NgZone)), takeUntilDestroyed())
            .subscribe(() => {
                if (el.scrollTop) {
                    el.style.touchAction = '';
                } else {
                    el.style.touchAction = 'pan-down';
                }
            });
    }
}
