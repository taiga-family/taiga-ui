import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type DoCheck,
    ElementRef,
    inject,
    input,
    viewChild,
} from '@angular/core';
import {outputFromObservable, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiInjectElement, tuiIsCurrentTarget} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_HINT_COMPONENT,
    TuiHint,
    TuiHintDirective,
} from '@taiga-ui/core/directives/hint';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    of,
    pairwise,
    startWith,
    Subject,
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
    host: {
        '(transitionend)': 'update()',
        '(mouseenter)': 'update()',
        '(resize)': 'update()',
    },
})
export class TuiLineClamp implements DoCheck {
    private readonly outlet = viewChild.required(TuiHintDirective, {read: ElementRef});
    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly isOverflown$ = new Subject<boolean>();
    private readonly maxHeight = computed(() => this.lineHeight() * this.linesLimit());

    public readonly lineHeight = input(24);
    public readonly linesLimit = input(1);
    public readonly content = input<PolymorpheusContent>();
    public readonly overflownChange = outputFromObservable(
        this.isOverflown$.pipe(debounceTime(0), distinctUntilChanged()),
    );

    // eslint-disable-next-line @typescript-eslint/member-ordering
    protected readonly lineClamp = toSignal(
        toObservable(this.linesLimit).pipe(
            startWith(1),
            pairwise(),
            switchMap(([prev, next]) =>
                next >= prev
                    ? of(next)
                    : fromEvent(this.el, 'transitionend').pipe(
                          filter(tuiIsCurrentTarget),
                          map(() => next),
                      ),
            ),
        ),
        {initialValue: 0},
    );

    public ngDoCheck(): void {
        this.update();
        this.isOverflown$.next(this.overflown);
    }

    protected get overflown(): boolean {
        const {scrollHeight, scrollWidth} = this.outlet().nativeElement;
        const {clientWidth} = this.el;

        return scrollHeight > this.maxHeight() || scrollWidth > clientWidth;
    }

    protected get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.overflown ? this.content() : '';
    }

    protected update(): void {
        this.el.style.height = tuiPx(this.outlet().nativeElement.scrollHeight);
        this.el.style.maxHeight = tuiPx(this.maxHeight());
        this.el.classList.toggle('_overflown', this.overflown);
    }
}
