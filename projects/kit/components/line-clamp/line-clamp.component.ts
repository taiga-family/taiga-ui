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

    private readonly calculated = signal(false);
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
                this.updateCss();

                merge(
                    fromEvent(this.el, 'mouseenter').pipe(
                        filter(() => !this.calculated()),
                    ),
                    fromEvent(window, 'resize').pipe(
                        debounceTime(100),
                        filter(() => this.calculated()),
                    ),
                    fromEvent(this.el, 'transitionend').pipe(
                        filter((e: Event) => e.target === e.currentTarget),
                        filter(() => this.calculated()),
                    ),
                )
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe(() => this.calculate());
            },
        });

        effect(() => {
            this.lineHeight();
            this.linesLimit();

            this.updateMaxHeight();

            if (this.calculated()) {
                this.calculate();
            } else {
                this.updateCss();
            }
        });
    }

    protected get computedContent(): PolymorpheusContent {
        return this.calculated() && this.options.showHint && this.overflown()
            ? this.content()
            : '';
    }

    private updateMaxHeight(): void {
        this.el.style.maxHeight = tuiPx(this.maxHeight());
    }

    private updateCss(): void {
        const outlet = this.outlet()?.nativeElement;

        if (!outlet) {
            return;
        }

        const overflown =
            outlet.scrollHeight > this.maxHeight() ||
            outlet.scrollWidth > this.el.clientWidth;

        this.el.style.height = tuiPx(outlet.scrollHeight);
        this.el.classList.toggle('_overflown', overflown);

        if (this.overflown() !== overflown) {
            this.overflownChange.emit(overflown);
        }

        this.overflown.set(overflown);
    }

    private calculate(): void {
        const outlet = this.outlet()?.nativeElement;

        if (!outlet) {
            return;
        }

        const overflown =
            outlet.scrollHeight > this.maxHeight() ||
            outlet.scrollWidth > this.el.clientWidth;

        this.calculated.set(true);

        if (this.overflown() !== overflown) {
            this.overflownChange.emit(overflown);
        }

        this.overflown.set(overflown);

        this.el.style.height = tuiPx(outlet.scrollHeight);
        this.el.classList.toggle('_overflown', overflown);
    }
}
