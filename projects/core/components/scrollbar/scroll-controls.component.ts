import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    INJECTOR,
    Injector,
} from '@angular/core';
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
import {distinctUntilChanged, map, merge, startWith, throttleTime} from 'rxjs';

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
    private readonly scrollRef: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;

    private readonly injector = inject(INJECTOR);

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

    // Event-driven implementation
    protected readonly refresh$ = merge(
        this.resizeObserverService.pipe(
            // debounceTime(50),
            map(() => null),
        ),
        this.mutationObserverService.pipe(
            // debounceTime(50),
            map(() => null),
        ),
        tuiTypedFromEvent(this.scrollRef, 'scroll').pipe(
            // throttleTime(16),
            map(() => null),
        ),
    ).pipe(
        throttleTime(50, tuiZonefreeScheduler()),
        map(() => this.scrollbars),
        startWith([false, false] as [boolean, boolean]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
