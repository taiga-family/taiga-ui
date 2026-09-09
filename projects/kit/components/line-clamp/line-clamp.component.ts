import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    DestroyRef,
    inject,
    Input,
    Output,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiIsCurrentTarget} from '@taiga-ui/cdk/utils/dom';
import {TUI_HINT_COMPONENT, TuiHint} from '@taiga-ui/core/directives/hint';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {
    filter,
    map,
    type Observable,
    of,
    pairwise,
    startWith,
    Subject,
    switchMap,
} from 'rxjs';

import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';
import {TuiLineClampBox} from './line-clamp-box.component';
import {TuiLineClampFallback} from './line-clamp-fallback.directive';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

@Component({
    standalone: true,
    selector: 'tui-line-clamp',
    imports: [PolymorpheusOutlet, TuiHint, TuiLineClampPositionDirective],
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_HINT_COMPONENT,
            useValue: TuiLineClampBox,
        },
    ],
    hostDirectives: [TuiTransitioned, TuiLineClampFallback],
    host: {
        '[class._overflown]': 'overflown()',
        '[style.max-height.px]': 'maxHeight()',
    },
})
export class TuiLineClamp {
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = tuiInjectElement();
    private readonly isOverflown$ = new Subject<boolean>();
    private readonly overflows = signal(0);
    private readonly destroyed = signal(false);

    protected readonly overflown = signal(false);
    protected readonly lineHeight = signal(24);
    protected readonly linesLimit = signal(1);

    protected readonly lineClamp = toSignal(
        toObservable(this.linesLimit).pipe(
            startWith(1),
            pairwise(),
            switchMap(([prev, next]) =>
                next >= prev
                    ? of(next)
                    : tuiTypedFromEvent(this.el, 'transitionend').pipe(
                          filter(tuiIsCurrentTarget),
                          map(() => next),
                      ),
            ),
        ),
        {initialValue: 0},
    );

    protected readonly computedContent = computed(() =>
        this.options.showHint && this.overflown() ? this.content() : '',
    );

    @Output()
    public readonly overflownChange: Observable<boolean> = this.isOverflown$;

    public readonly content = signal<PolymorpheusContent>('');
    public readonly maxHeight = computed(() => this.lineHeight() * this.linesLimit());

    constructor() {
        inject(DestroyRef).onDestroy(() => this.destroyed.set(true));
    }

    @Input('content')
    public set contentSetter(content: PolymorpheusContent) {
        this.content.set(content);
    }

    @Input('lineHeight')
    public set lineHeightSetter(lineHeight: number) {
        this.lineHeight.set(lineHeight);
    }

    @Input('linesLimit')
    public set linesLimitSetter(linesLimit: number) {
        this.linesLimit.set(linesLimit);
    }

    public setOverflown(overflown: boolean): void {
        if (this.destroyed() || this.overflown() === overflown) {
            return;
        }

        this.overflown.set(overflown);
        this.cdr.markForCheck();
        this.isOverflown$.next(overflown);
    }

    /**
     * Both axes can overflow at once, and turning the clamp on can stop one of them,
     * so a single axis going quiet does not mean the content fits
     */
    protected onOverflow(overflown: boolean): void {
        this.overflows.update((val) => val + (overflown ? 1 : -1));

        this.setOverflown(this.overflows() > 0);
    }
}
