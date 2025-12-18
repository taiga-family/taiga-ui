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
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_HINT_COMPONENT, TuiHint, TuiHintDirective} from '@taiga-ui/core/portals/hint';
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
})
export class TuiLineClamp {
    private readonly outlet = viewChild(TuiHintDirective, {read: ElementRef});
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);

    private readonly calculatedForHint = signal(false);
    private readonly overflown = signal(false);
    private readonly maxHeight = computed(() => this.lineHeight() * this.linesLimit());

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
                this.updateMaxHeight();
                this.calculateAndEmitOverflow();

                merge(
                    fromEvent(this.el, 'mouseenter').pipe(
                        filter(() => !this.calculatedForHint()),
                    ),
                    fromEvent(window, 'resize').pipe(
                        debounceTime(100),
                        filter(() => this.calculatedForHint()),
                    ),
                    fromEvent(this.el, 'transitionend').pipe(
                        filter((e: Event) => e.target === e.currentTarget),
                        filter(() => this.calculatedForHint()),
                    ),
                )
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe(() => this.calculateForHint());
            },
        });

        effect(() => {
            this.lineHeight();
            this.linesLimit();
            this.content();

            this.updateMaxHeight();
            this.calculateAndEmitOverflow();
        });
    }

    protected get computedContent(): PolymorpheusContent {
        return this.calculatedForHint() && this.options.showHint && this.overflown()
            ? this.content()
            : '';
    }

    private updateMaxHeight(): void {
        this.el.style.maxHeight = tuiPx(this.maxHeight());
    }

    private updateVisualState(overflown: boolean): void {
        const outlet = this.outlet()?.nativeElement;

        if (!outlet) {
            return;
        }

        this.el.style.height = tuiPx(outlet.scrollHeight);
        this.el.classList.toggle('_overflown', overflown);
    }

    private calculateAndEmitOverflow(): void {
        const outlet = this.outlet()?.nativeElement;

        if (!outlet) {
            return;
        }

        const overflown =
            outlet.scrollHeight > this.maxHeight() ||
            outlet.scrollWidth > this.el.clientWidth;

        const previousOverflown = this.overflown();

        this.overflown.set(overflown);
        this.updateVisualState(overflown);

        if (previousOverflown !== overflown) {
            this.overflownChange.emit(overflown);
        }
    }

    private calculateForHint(): void {
        this.calculatedForHint.set(true);
        this.calculateAndEmitOverflow();
    }
}
