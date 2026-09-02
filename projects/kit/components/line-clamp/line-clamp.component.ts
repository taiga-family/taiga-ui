import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    INJECTOR,
    input,
    output,
    signal,
    viewChild,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_HINT_COMPONENT, TuiHint, TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {filter, fromEvent, map, of, pairwise, startWith, switchMap} from 'rxjs';

import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';
import {TuiLineClampBox} from './line-clamp-box.component';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

type Measure = Pick<Element, 'clientWidth' | 'scrollHeight' | 'scrollWidth'>;

@Component({
    selector: 'tui-line-clamp',
    imports: [
        PolymorpheusOutlet,
        TuiHint,
        TuiLineClampPositionDirective,
        WaResizeObserver,
    ],
    templateUrl: './line-clamp.template.html',
    styleUrl: './line-clamp.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_HINT_COMPONENT, useValue: TuiLineClampBox}],
    hostDirectives: [TuiTransitioned],
    host: {
        '[style.line-height.px]': 'line()',
        // Declarative, so that SSR output is already clamped before hydration
        '[style.max-height.px]': 'maxHeight()',
        '(mouseenter)': 'update()',
        '(transitionend)': 'update()',
    },
})
export class TuiLineClamp {
    private readonly offset = inject(TUI_FONT_OFFSET);
    private readonly outlet = viewChild.required(TuiHintDirective, {read: ElementRef});
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly injector = inject(INJECTOR);
    private readonly overflown = signal(false);

    protected readonly maxHeight = computed(() => this.line() * this.linesLimit());

    public readonly line = computed(() => this.lineHeight() + this.offset());
    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();

    public readonly showHint = input<boolean, BooleanInput>(this.options.showHint, {
        transform: coerceBooleanProperty,
    });

    public readonly overflownChange = output<boolean>();

    protected readonly refresh = effect(() => {
        this.content();
        this.maxHeight();

        afterNextRender(
            {
                earlyRead: () => this.measure(),
                write: (measures) => this.apply(measures),
            },
            {injector: this.injector},
        );
    });

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

    protected readonly computedContent = computed(() =>
        this.showHint() && this.overflown() ? this.content() : '',
    );

    protected update(): void {
        this.apply(this.measure());
    }

    private measure(): Measure {
        const {scrollHeight, scrollWidth} = this.outlet().nativeElement;

        return {scrollHeight, scrollWidth, clientWidth: this.el.clientWidth};
    }

    private apply({scrollHeight, scrollWidth, clientWidth}: Measure): void {
        const maxHeight = this.maxHeight();
        const overflown = scrollHeight > maxHeight || scrollWidth > clientWidth;

        this.el.style.height = tuiPx(scrollHeight);
        this.el.classList.toggle('_overflown', overflown);
        this.setOverflown(overflown);
    }

    private setOverflown(overflown: boolean): void {
        if (this.overflown() !== overflown) {
            this.overflown.set(overflown);
            this.overflownChange.emit(overflown);
        }
    }
}
