import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    INJECTOR,
    Injector,
} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {
    tuiTypedFromEvent,
    tuiZonefreeScheduler,
    tuiZoneOptimized,
} from '@taiga-ui/cdk/observables';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    merge,
    startWith,
    throttleTime,
} from 'rxjs';

import {TuiScrollbarDirective} from './scrollbar.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

@Component({
    standalone: true,
    selector: 'tui-scroll-controls',
    imports: [AsyncPipe, NgIf, TuiAnimated, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiScrollControls {
    private readonly scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    private readonly injector = inject(INJECTOR);

    // Runtime-configurable RAF mode for testing
    private readonly useRafMode =
        typeof window !== 'undefined' &&
        sessionStorage.getItem('tui-scrollbar-raf') === '1';

    // Runtime-configurable timings for fair perf comparisons
    private readonly scDebounceMs = Number(
        (typeof window !== 'undefined' &&
            sessionStorage.getItem('tui-scroll-controls-debounce')) ??
            '100',
    );

    private readonly scThrottleMs = Number(
        (typeof window !== 'undefined' &&
            sessionStorage.getItem('tui-scroll-controls-throttle')) ??
            '100',
    );

    private readonly resizeObserverService = Injector.create({
        providers: [
            ResizeObserverService,
            {
                provide: ElementRef,
                useFactory: () => new ElementRef(this.scrollRef),
            },
        ],
        parent: this.injector,
    }).get(ResizeObserverService);

    private readonly mutationObserverService = Injector.create({
        providers: [
            MutationObserverService,
            provideMutationObserverInit({
                childList: true,
                characterData: true,
                subtree: true,
            }),
            {
                provide: ElementRef,
                useFactory: () => new ElementRef(this.scrollRef),
            },
        ],
        parent: this.injector,
    }).get(MutationObserverService);

    // Original RAF-based implementation (for baseline testing)
    private readonly rafBasedRefresh$ = inject(WA_ANIMATION_FRAME).pipe(
        throttleTime(this.scThrottleMs, tuiZonefreeScheduler()),
        map(() => this.scrollbars),
        startWith([false, false] as [boolean, boolean]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    // Event-driven implementation (current optimized version)
    private readonly eventBasedRefresh$ = merge(
        this.resizeObserverService.pipe(
            debounceTime(this.scDebounceMs),
            map(() => null),
        ),
        this.mutationObserverService.pipe(
            debounceTime(this.scDebounceMs),
            map(() => null),
        ),
        tuiTypedFromEvent(this.scrollRef, 'scroll').pipe(
            throttleTime(this.scThrottleMs),
            map(() => null),
        ),
    ).pipe(
        map(() => this.scrollbars),
        startWith([false, false] as [boolean, boolean]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';

    // Choose refresh strategy based on configuration
    protected readonly refresh$ = this.useRafMode
        ? this.rafBasedRefresh$
        : this.eventBasedRefresh$;

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
