import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Output,
    Self,
} from '@angular/core';
import {
    TUI_IS_IOS,
    TuiContextWithImplicit,
    TuiDestroyService,
    TuiHandler,
    tuiPx,
    tuiScrollFrom,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith, takeUntil} from 'rxjs/operators';

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
    providers: [TuiPullToRefreshService, TuiDestroyService],
})
export class TuiPullToRefreshComponent {
    @Input()
    styleHandler: TuiHandler<number, Record<string, any> | null> = this.isIOS
        ? distance => ({top: tuiPx(distance / 2)})
        : () => null;

    @Output()
    readonly pulled: Observable<unknown> = this.pulling$.pipe(
        filter(distance => distance === this.threshold),
    );

    readonly dropped$: Observable<boolean> = this.pulling$.pipe(
        map(distance => distance <= MICRO_OFFSET || distance === this.threshold),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiDestroyService) @Self() destroy$: Observable<unknown>,
        @Inject(TUI_SCROLL_REF) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TUI_IS_IOS) private readonly isIOS: boolean,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
        @Inject(TUI_PULL_TO_REFRESH_COMPONENT)
        readonly component: PolymorpheusContent<TuiContextWithImplicit<number>>,
        @Inject(TuiPullToRefreshService) readonly pulling$: Observable<number>,
    ) {
        // Ensure scrolling down is impossible while pulling
        if (this.component) {
            tuiScrollFrom(nativeElement)
                .pipe(startWith(null), tuiZonefree(ngZone), takeUntil(destroy$))
                .subscribe(() => {
                    if (nativeElement.scrollTop) {
                        nativeElement.style.touchAction = '';
                    } else {
                        nativeElement.style.touchAction = 'pan-down';
                    }
                });
        }
    }
}
