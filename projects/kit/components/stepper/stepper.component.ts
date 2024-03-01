import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    tuiGetOriginalArrayFromQueryList,
    tuiIsElement,
    tuiMoveFocus,
    tuiPure,
    tuiQueryListChanges,
    TuiScrollService,
} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, tuiGetDuration, TuiOrientation} from '@taiga-ui/core';
import {delay, Observable, takeUntil} from 'rxjs';

import {TuiStepComponent} from './step/step.component';

@Component({
    selector: 'tui-stepper, nav[tuiStepper]',
    templateUrl: './stepper.template.html',
    styleUrls: ['./stepper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService, TuiDestroyService],
})
export class TuiStepperComponent {
    @ContentChildren(forwardRef(() => TuiStepComponent), {read: ElementRef})
    private readonly steps: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly scrollService = inject(TuiScrollService);
    private readonly resize$ = inject(ResizeObserverService);
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    @Input()
    @HostBinding('attr.data-orientation')
    public orientation: TuiOrientation = 'horizontal';

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    protected activeItemIndex = 0;

    constructor() {
        this.resize$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.scrollIntoView(this.activeItemIndex));
    }

    @Input('activeItemIndex')
    public set activeIndex(index: number) {
        this.activeItemIndex = index;
        this.scrollIntoView(index);
    }

    public indexOf(step: HTMLElement): number {
        return tuiGetOriginalArrayFromQueryList(this.steps).findIndex(
            ({nativeElement}) => nativeElement === step,
        );
    }

    public isActive(index: number): boolean {
        return index === this.activeItemIndex;
    }

    public activate(index: number): void {
        if (this.activeItemIndex === index) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
        this.cdr.markForCheck();
        this.scrollIntoView(index);
    }

    @tuiPure
    protected get changes$(): Observable<unknown> {
        // Delay is required to trigger change detection after steps are rendered,
        // so they can update their "active" status
        return tuiQueryListChanges(this.steps).pipe(delay(0));
    }

    @HostListener('keydown.arrowRight', ['$event', '1'])
    @HostListener('keydown.arrowLeft', ['$event', '-1'])
    protected onHorizontal(event: Event, step: number): void {
        if (this.orientation !== 'horizontal' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    @HostListener('keydown.arrowDown', ['$event', '1'])
    @HostListener('keydown.arrowUp', ['$event', '-1'])
    protected onVertical(event: Event, step: number): void {
        if (this.orientation !== 'vertical' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    @tuiPure
    private getNativeElements(
        queryList: QueryList<ElementRef<HTMLElement>>,
    ): HTMLElement[] {
        return queryList.map(({nativeElement}) => nativeElement);
    }

    private moveFocus(current: EventTarget, step: number): void {
        if (!tuiIsElement(current)) {
            return;
        }

        const stepElements = this.getNativeElements(this.steps);
        const index = stepElements.findIndex(item => item === current);

        tuiMoveFocus(index, stepElements, step);
    }

    private scrollIntoView(index: number): void {
        const step = this.getNativeElements(this.steps)[index];

        if (!step) {
            return;
        }

        const {clientHeight, clientWidth, offsetTop, offsetLeft} = this.el;
        const {
            offsetHeight,
            offsetWidth,
            offsetTop: stepOffsetTop,
            offsetLeft: stepOffsetLeft,
        } = step;
        const top = stepOffsetTop - offsetTop - clientHeight / 2 + offsetHeight / 2;
        const left = stepOffsetLeft - offsetLeft - clientWidth / 2 + offsetWidth / 2;

        this.scrollService
            .scroll$(
                this.el,
                Math.max(0, top),
                Math.max(0, left),
                tuiGetDuration(this.speed) / 3,
            )
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}
