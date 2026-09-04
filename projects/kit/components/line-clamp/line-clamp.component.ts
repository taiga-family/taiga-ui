import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_HINT_COMPONENT, TuiHint} from '@taiga-ui/core/portals/hint';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {filter, fromEvent, map, of, pairwise, startWith, switchMap} from 'rxjs';

import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';
import {TuiLineClampBox} from './line-clamp-box.component';
import {TuiLineClampFallback} from './line-clamp-fallback.directive';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

@Component({
    selector: 'tui-line-clamp',
    imports: [PolymorpheusOutlet, TuiHint, TuiLineClampPositionDirective],
    templateUrl: './line-clamp.template.html',
    styleUrl: './line-clamp.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_HINT_COMPONENT, useValue: TuiLineClampBox}],
    hostDirectives: [TuiTransitioned, TuiLineClampFallback],
    host: {
        '[class._overflown]': 'overflown()',
        '[style.line-height.px]': 'line()',
        '[style.max-height.px]': 'maxHeight()',
    },
})
export class TuiLineClamp {
    private readonly offset = inject(TUI_FONT_OFFSET);
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly overflows = signal(0);

    protected readonly overflown = signal(false);

    public readonly maxHeight = computed(() => this.line() * this.linesLimit());
    public readonly line = computed(() => this.lineHeight() + this.offset());
    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();

    public readonly showHint = input<boolean, BooleanInput>(this.options.showHint, {
        transform: coerceBooleanProperty,
    });

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

    protected readonly computedContent = computed(() =>
        this.showHint() && this.overflown() ? this.content() : '',
    );

    public setOverflown(overflown: boolean): void {
        if (this.overflown() !== overflown) {
            this.overflown.set(overflown);
            this.overflownChange.emit(overflown);
        }
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
