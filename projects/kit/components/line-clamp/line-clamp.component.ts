import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    input,
    output,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_HINT_COMPONENT, TuiHint, TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {
    debounceTime,
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

@Component({
    selector: 'tui-line-clamp',
    imports: [PolymorpheusOutlet, TuiHint, TuiLineClampPositionDirective],
    templateUrl: './line-clamp.template.html',
    styleUrl: './line-clamp.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_HINT_COMPONENT, useValue: TuiLineClampBox}],
    hostDirectives: [TuiTransitioned],
    host: {'[style.line-height.px]': 'line()'},
})
export class TuiLineClamp {
    private readonly destroyRef = inject(DestroyRef);

    private readonly offset = inject(TUI_FONT_OFFSET);
    private readonly outlet = viewChild.required(TuiHintDirective, {read: ElementRef});
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();

    private readonly isOverflowing = signal(false);
    private readonly maxHeight = computed(() => this.line() * this.linesLimit());
    private readonly rendered = signal(false);

    public readonly line = computed(() => this.lineHeight() + this.offset());
    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();
    public readonly overflownChange = output<boolean>();

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
                this.setupListeners();
            },
        });

        effect(() => {
            this.lineHeight();
            this.linesLimit();

            untracked(() => {
                this.el.style.maxHeight = tuiPx(this.maxHeight());

                if (this.rendered()) {
                    this.update();
                }
            });
        });
    }

    protected get computedContent(): PolymorpheusContent {
        return this.rendered() && this.options.showHint && this.isOverflowing()
            ? this.content()
            : '';
    }

    private setupListeners(): void {
        merge(
            fromEvent(this.el, 'mouseenter'),
            fromEvent(window, 'resize').pipe(debounceTime(100)),
            fromEvent(this.el, 'transitionend').pipe(
                filter((e: Event) => e.target === e.currentTarget),
            ),
        )
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.update());
    }

    private update(): void {
        const outlet = this.outlet().nativeElement;
        const {scrollHeight, scrollWidth} = outlet;
        const overflowing =
            scrollHeight > this.maxHeight() || scrollWidth > this.el.clientWidth;

        this.el.style.height = tuiPx(outlet.scrollHeight);
        this.el.classList.toggle('_overflown', overflowing);

        if (this.isOverflowing() !== overflowing) {
            this.overflownChange.emit(overflowing);
            this.isOverflowing.set(overflowing);
        }
    }
}
