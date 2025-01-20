import type {AfterViewInit, DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiIsCurrentTarget} from '@taiga-ui/cdk/utils/dom';
import {
    TUI_HINT_COMPONENT,
    TuiHint,
    TuiHintDirective,
} from '@taiga-ui/core/directives/hint';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    filter,
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

// 4px buffer for IE/Edge incorrectly rounding scrollHeight
const BUFFER = 4;

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
    host: {
        '[style.height.px]': 'height()',
        '[style.max-height.px]': 'maxHeight()',
        '[class._initialized]': 'initialized()',
        '(transitionend)': 'updateView()',
        '(mouseenter)': 'updateView()',
        '(resize)': 'updateView()',
    },
})
export class TuiLineClamp implements DoCheck, AfterViewInit {
    @ViewChild(TuiHintDirective, {read: ElementRef})
    private readonly outlet?: ElementRef<HTMLElement>;

    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly cd = inject(ChangeDetectorRef);
    private readonly linesLimit$ = new BehaviorSubject(1);
    private readonly isOverflown$ = new Subject<boolean>();
    protected initialized = signal(false);
    protected maxHeight = signal(0);
    protected height = signal(0);

    protected lineClamp = toSignal(
        this.linesLimit$.pipe(
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
            takeUntilDestroyed(),
        ),
        {initialValue: 0},
    );

    @Input()
    public lineHeight = 24;

    @Input()
    public content: PolymorpheusContent;

    @Output()
    public readonly overflownChange: Observable<boolean> = this.isOverflown$.pipe(
        debounceTime(0),
        distinctUntilChanged(),
    );

    @Input()
    public set linesLimit(linesLimit: number) {
        this.linesLimit$.next(linesLimit);
    }

    public ngDoCheck(): void {
        this.update();
        this.isOverflown$.next(this.overflown);
    }

    public ngAfterViewInit(): void {
        this.initialized.set(true);
    }

    protected get overflown(): boolean {
        if (!this.outlet) {
            return false;
        }

        const {
            scrollHeight,
            scrollWidth,
            clientHeight: outletHeight,
        } = this.outlet.nativeElement;
        const {clientHeight, clientWidth} = this.el;

        return (
            scrollHeight - clientHeight > BUFFER ||
            scrollWidth - clientWidth > 0 ||
            scrollHeight > outletHeight
        );
    }

    protected get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.overflown ? this.content : '';
    }

    protected updateView(): void {
        this.cd.detectChanges();
    }

    private update(): void {
        if (this.outlet) {
            this.height.set(this.outlet.nativeElement.scrollHeight + BUFFER);
        }

        this.maxHeight.set(this.lineHeight * this.linesLimit$.value);
    }
}
