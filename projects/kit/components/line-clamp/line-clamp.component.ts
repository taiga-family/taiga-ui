import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    afterRenderEffect,
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import {
    outputFromObservable,
    takeUntilDestroyed,
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import {WaIntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_HINT_COMPONENT, TuiHint, TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    merge,
    of,
    pairwise,
    startWith,
    switchMap,
} from 'rxjs';

import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';
import {TuiLineClampBox} from './line-clamp-box.component';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

interface TuiLineClampMeasures {
    readonly scrollHeight: number;
    readonly scrollWidth: number;
    readonly clientWidth: number;
}

@Component({
    selector: 'tui-line-clamp',
    imports: [PolymorpheusOutlet, TuiHint, TuiLineClampPositionDirective],
    templateUrl: './line-clamp.template.html',
    styleUrl: './line-clamp.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: TUI_HINT_COMPONENT, useValue: TuiLineClampBox},
        WaResizeObserverService,
        WaIntersectionObserverService,
    ],
    hostDirectives: [TuiTransitioned],
    host: {
        '[style.line-height.px]': 'line()',
        '(mouseenter)': 'update()',
        '(transitionend)': 'update()',
    },
})
export class TuiLineClamp {
    private readonly offset = inject(TUI_FONT_OFFSET);
    private readonly outlet = viewChild.required(TuiHintDirective, {read: ElementRef});
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly maxHeight = computed(() => this.line() * this.linesLimit());
    private readonly isOverflowing = signal(false);
    private readonly resize$ = inject(WaResizeObserverService);
    private readonly intersection$ = inject(WaIntersectionObserverService).pipe(
        map(([entry]) => entry?.isIntersecting ?? true),
        distinctUntilChanged(),
        filter(Boolean),
    );

    public readonly line = computed(() => this.lineHeight() + this.offset());
    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();
    public readonly showHint = input<boolean, BooleanInput>(this.options.showHint, {
        transform: coerceBooleanProperty,
    });

    public readonly overflownChange = outputFromObservable(
        toObservable(this.isOverflowing).pipe(distinctUntilChanged()),
    );

    protected readonly lineClamp = toSignal(
        toObservable(this.linesLimit).pipe(
            startWith(1),
            pairwise(),
            switchMap(([prev, next]) =>
                next >= prev
                    ? of(next)
                    : fromEvent(this.el, 'transitionend').pipe(
                          filter((e) => e.target === e.currentTarget),
                          map(() => next),
                      ),
            ),
        ),
        {initialValue: 0},
    );

    constructor() {
        // `afterRenderEffect` is experimental in Angular 19. It is used here to separate DOM reads from writes and avoid `mixedReadWrite`.
        afterRenderEffect({
            earlyRead: () => {
                this.content();
                this.maxHeight();

                return untracked(() => this.measure());
            },
            write: (measures) => this.applyMeasurements(measures()),
        });

        merge(this.resize$, this.intersection$)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.update());
    }

    protected get computedContent(): PolymorpheusContent {
        return this.showHint() && this.isOverflowing() ? this.content() : '';
    }

    protected update(): void {
        this.applyMeasurements(this.measure());
    }

    private measure(): TuiLineClampMeasures {
        const outlet = this.outlet().nativeElement;

        return {
            scrollHeight: outlet.scrollHeight,
            scrollWidth: outlet.scrollWidth,
            clientWidth: this.el.clientWidth,
        };
    }

    private applyMeasurements({
        scrollHeight,
        scrollWidth,
        clientWidth,
    }: TuiLineClampMeasures): void {
        const maxHeight = this.maxHeight();
        const overflowing = scrollHeight > maxHeight || scrollWidth > clientWidth;

        this.el.style.height = tuiPx(scrollHeight);
        this.el.style.maxHeight = tuiPx(maxHeight);
        this.el.classList.toggle('_overflown', overflowing);

        this.isOverflowing.set(overflowing);
    }
}
