import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
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

import {TuiLineClampBox} from './line-clamp-box.component';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';
import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';

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
    private readonly rendered = signal(false);
    private readonly isOverflowing = signal(false);
    private readonly resize$ = inject(WaResizeObserverService);
    private readonly intersection$ = inject(WaIntersectionObserverService).pipe(
        map(([entry]) => entry?.isIntersecting ?? true),
        distinctUntilChanged(),
        filter(Boolean),
    );
    private readonly sub = merge(this.resize$, this.intersection$)
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.update());

    public readonly line = computed(() => this.lineHeight() + this.offset());
    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();

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
        afterNextRender({
            write: () => {
                this.rendered.set(true);
                this.update();
            },
        });

        effect(() => {
            if (!this.rendered()) {
                return;
            }

            this.lineHeight();
            this.linesLimit();
            untracked(() => this.update());
        });
    }

    protected get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.isOverflowing() ? this.content() : '';
    }

    protected update(): void {
        const outlet = this.outlet().nativeElement;
        const {scrollHeight, scrollWidth} = outlet;
        const {clientWidth} = this.el;
        const maxHeight = this.maxHeight();
        const overflowing = scrollHeight > maxHeight || scrollWidth > clientWidth;

        this.el.style.height = tuiPx(scrollHeight);
        this.el.style.maxHeight = tuiPx(maxHeight);
        this.el.classList.toggle('_overflown', overflowing);

        this.isOverflowing.set(overflowing);
    }
}
