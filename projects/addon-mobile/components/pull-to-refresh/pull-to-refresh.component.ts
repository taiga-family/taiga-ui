import {ChangeDetectionStrategy, Component, Inject, Output} from '@angular/core';
import {TUI_IS_IOS, tuiPure} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {distinctUntilChanged, filter, map, mapTo} from 'rxjs/operators';
import {
    MICRO_OFFSET,
    PULLED_DISTANCE,
    TUI_PULL_TO_REFRESH_PROVIDERS,
    TUI_PULLING,
} from './pull-to-refresh.providers';

const IOS_LOADING_DISTANCE = PULLED_DISTANCE / 2;
const ANDROID_MAX_DISTANCE = PULLED_DISTANCE * 1.5;

function translateY(distance: number): string {
    return `translateY(${distance}px)`;
}

@Component({
    selector: 'tui-pull-to-refresh',
    templateUrl: './pull-to-refresh.template.html',
    styleUrls: ['./pull-to-refresh.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_PULL_TO_REFRESH_PROVIDERS],
})
export class TuiPullToRefreshComponent {
    @Output()
    readonly pulled: Observable<void> = this.pulling$.pipe(
        distinctUntilChanged(),
        filter(distance => distance === PULLED_DISTANCE),
        mapTo(undefined),
    );

    constructor(
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_PULLING) private readonly pulling$: Observable<number>,
    ) {}

    @tuiPure
    get loadedInPercent$(): Observable<number> {
        return this.pulling$.pipe(map(distance => (distance * 100) / PULLED_DISTANCE));
    }

    @tuiPure
    get loaderTransform$(): Observable<string> {
        return this.pulling$.pipe(
            map(distance => translateY(Math.min(distance, ANDROID_MAX_DISTANCE))),
        );
    }

    @tuiPure
    get contentTransform$(): Observable<string | null> {
        return this.isIOS
            ? this.pulling$.pipe(
                  map(distance => {
                      const contentDistance =
                          distance === PULLED_DISTANCE ? IOS_LOADING_DISTANCE : distance;

                      return translateY(contentDistance);
                  }),
              )
            : of(null);
    }

    @tuiPure
    get dropped$(): Observable<boolean> {
        return this.pulling$.pipe(
            map(distance => distance <= MICRO_OFFSET || distance === PULLED_DISTANCE),
            distinctUntilChanged(),
        );
    }
}
