import {AsyncPipe} from '@angular/common';
import type {AfterViewInit, DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    NgZone,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiIsCurrentTarget} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_HINT_COMPONENT,
    TuiHint,
    TuiHintDirective,
} from '@taiga-ui/core/directives/hint';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    distinctUntilChanged,
    filter,
    map,
    of,
    pairwise,
    startWith,
    Subject,
    switchMap,
    timer,
} from 'rxjs';

import {TUI_LINE_CLAMP_OPTIONS} from './line-clamp.options';
import {TuiLineClampBoxComponent} from './line-clamp-box.component';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

@Component({
    standalone: true,
    selector: 'tui-line-clamp',
    imports: [
        ResizeObserverDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiHint,
        TuiLet,
        AsyncPipe,
        TuiLineClampPositionDirective,
    ],
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_HINT_COMPONENT,
            useValue: TuiLineClampBoxComponent,
        },
    ],
})
export class TuiLineClampComponent implements DoCheck, AfterViewInit {
    @ViewChild(TuiHintDirective, {read: ElementRef})
    private readonly outlet?: ElementRef<HTMLElement>;

    private readonly options = inject(TUI_LINE_CLAMP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly renderer = inject(Renderer2);
    private readonly cd = inject(ChangeDetectorRef);
    private readonly zone: NgZone = inject(NgZone);
    private readonly linesLimit$ = new BehaviorSubject(1);
    private readonly isOverflown$ = new Subject<boolean>();
    private initialized = false;

    protected lineClamp$ = this.linesLimit$.pipe(
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
    );

    @Input()
    public lineHeight = 24;

    @Input()
    public content: PolymorpheusContent;

    @Output()
    public readonly overflownChange: Observable<boolean> =
        this.isOverflown$.pipe(distinctUntilChanged());

    constructor() {
        this.skipInitialTransition();
    }

    @Input()
    public set linesLimit(linesLimit: number) {
        this.linesLimit$.next(linesLimit);
    }

    public ngDoCheck(): void {
        this.update();
        this.isOverflown$.next(this.overflown);
    }

    public ngAfterViewInit(): void {
        this.initialized = true;
    }

    protected get overflown(): boolean {
        if (!this.outlet) {
            return false;
        }

        const {scrollHeight, scrollWidth} = this.outlet.nativeElement;
        const {clientHeight, clientWidth} = this.el;

        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }

    protected get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.overflown ? this.content : '';
    }

    @HostListener('transitionend')
    protected updateView(): void {
        this.cd.detectChanges();
    }

    private skipInitialTransition(): void {
        timer(0)
            .pipe(tuiZonefree(this.zone))
            .subscribe(() => {
                this.renderer.addClass(this.el, '_initialized');
                this.cd.detectChanges();
            });
    }

    private update(): void {
        if (this.outlet) {
            this.renderer.setStyle(
                this.el,
                'height',
                tuiPx(this.outlet.nativeElement.scrollHeight + 4),
            );
        }

        if (this.initialized) {
            this.renderer.setStyle(
                this.el,
                'max-height',
                tuiPx(this.lineHeight * this.linesLimit$.value),
            );
        }
    }
}
