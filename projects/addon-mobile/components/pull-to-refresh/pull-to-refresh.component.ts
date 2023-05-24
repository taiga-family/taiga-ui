import {ChangeDetectionStrategy, Component, Inject, Output} from '@angular/core';
import {TUI_IS_IOS, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, of} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

import {TUI_IOS_LOADER} from './loader-ios/loader-ios.component';
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
    @Output()
    readonly pulled: Observable<unknown> = this.pulling$.pipe(
        distinctUntilChanged(),
        filter(distance => distance === this.threshold),
    );

    // TODO: Move to iOS loader somehow, like contentTransform$ below
    readonly dropped$: Observable<boolean> = this.pulling$.pipe(
        map(distance => distance <= MICRO_OFFSET || distance === this.threshold),
        distinctUntilChanged(),
    );

    readonly contentTransform$: Observable<string | null> =
        this.isIOS && this.component === TUI_IOS_LOADER
            ? this.pulling$.pipe(map(distance => `translateY(${distance / 2}px)`))
            : of(null);

    constructor(
        @Inject(TUI_IS_IOS) private readonly isIOS: boolean,
        @Inject(TUI_PULL_TO_REFRESH_THRESHOLD) private readonly threshold: number,
        @Inject(TUI_PULL_TO_REFRESH_COMPONENT)
        readonly component: PolymorpheusContent<TuiContextWithImplicit<number>>,
        @Inject(TuiPullToRefreshService) readonly pulling$: Observable<number>,
    ) {}
}
