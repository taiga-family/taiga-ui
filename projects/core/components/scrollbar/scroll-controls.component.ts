import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    INJECTOR,
    Injector,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    animationFrameScheduler,
    auditTime,
    distinctUntilChanged,
    map,
    merge,
    startWith,
} from 'rxjs';

import {TuiScrollbarDirective} from './scrollbar.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

@Component({
    standalone: true,
    selector: 'tui-scroll-controls',
    imports: [TuiAnimated, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrl: './scroll-controls.style.less',
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

    protected readonly refresh$ = merge(
        this.resizeObserverService,
        this.mutationObserverService,
        tuiTypedFromEvent(this.scrollRef, 'scroll'),
    ).pipe(
        auditTime(0, animationFrameScheduler),
        map(() => this.scrollbars),
        startWith([false, false] as [boolean, boolean]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    protected readonly refresh = toSignal(this.refresh$, {
        initialValue: [false, false] as [boolean, boolean],
    });

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [scrollHeight > clientHeight + 1, scrollWidth > clientWidth + 1];
    }
}
