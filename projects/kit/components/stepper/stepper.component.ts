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
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiDestroyService,
    tuiGetOriginalArrayFromQueryList,
    tuiIsElement,
    tuiMoveFocus,
    tuiPure,
    tuiQueryListChanges,
    TuiResizeService,
    TuiScrollService,
} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION, TuiOrientation} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiStepComponent} from './step/step.component';

@Component({
    selector: 'tui-stepper, nav[tuiStepper]',
    templateUrl: './stepper.template.html',
    styleUrls: ['./stepper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiResizeService, TuiDestroyService],
})
export class TuiStepperComponent {
    @ContentChildren(forwardRef(() => TuiStepComponent), {read: ElementRef})
    private readonly steps: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    @HostBinding('attr.data-orientation')
    @tuiDefaultProp()
    orientation: TuiOrientation = 'horizontal';

    @Input('activeItemIndex')
    set activeIndex(index: number) {
        this.activeItemIndex = index;
        this.scrollIntoView(index);
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    activeItemIndex = 0;

    constructor(
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiScrollService) private readonly scrollService: TuiScrollService,
        @Inject(TuiResizeService) resize$: Observable<void>,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
    ) {
        resize$.subscribe(() => this.scrollIntoView(this.activeItemIndex));
    }

    @tuiPure
    get changes$(): Observable<unknown> {
        // Delay is required to trigger change detection after steps are rendered,
        // so they can update their "active" status
        return tuiQueryListChanges(this.steps).pipe(delay(0));
    }

    @HostListener('keydown.arrowRight', ['$event', '1'])
    @HostListener('keydown.arrowLeft', ['$event', '-1'])
    onHorizontal(event: Event, step: number): void {
        if (this.orientation !== 'horizontal' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    @HostListener('keydown.arrowDown', ['$event', '1'])
    @HostListener('keydown.arrowUp', ['$event', '-1'])
    onVertical(event: Event, step: number): void {
        if (this.orientation !== 'vertical' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    indexOf(step: HTMLElement): number {
        return tuiGetOriginalArrayFromQueryList(this.steps).findIndex(
            ({nativeElement}) => nativeElement === step,
        );
    }

    isActive(index: number): boolean {
        return index === this.activeItemIndex;
    }

    activate(index: number): void {
        if (this.activeItemIndex === index) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
        this.cdr.markForCheck();
        this.scrollIntoView(index);
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

        const {nativeElement} = this.el;
        const {clientHeight, clientWidth, offsetTop, offsetLeft} = nativeElement;
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
                nativeElement,
                Math.max(0, top),
                Math.max(0, left),
                this.duration / 3,
            )
            .subscribe();
    }
}
