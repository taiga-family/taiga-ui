import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    tuiGetOriginalArrayFromQueryList,
    tuiIsElement,
    tuiItemsQueryListObservable,
    tuiMoveFocus,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiOrientation} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

import {TuiStepComponent} from './step/step.component';

const ONLY_HORIZONTAL_SCROLL: ScrollIntoViewOptions = {
    block: `nearest`,
    inline: `center`,
};

const ONLY_VERTICAL_SCROLL: ScrollIntoViewOptions = {
    block: `center`,
    inline: `nearest`,
};

@Component({
    selector: `tui-stepper, nav[tuiStepper]`,
    templateUrl: `./stepper.template.html`,
    styleUrls: [`./stepper.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiStepperComponent {
    @ContentChildren(forwardRef(() => TuiStepComponent), {read: ElementRef})
    private readonly steps: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    @HostBinding(`attr.data-orientation`)
    @tuiDefaultProp()
    orientation: TuiOrientation = `horizontal`;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = 0;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @tuiPure
    get changes$(): Observable<unknown> {
        // Delay is required to trigger change detection after steps are rendered
        // so they can update their "active" status
        return tuiItemsQueryListObservable(this.steps).pipe(delay(0));
    }

    @HostListener(`keydown.arrowRight`, [`$event`, `1`])
    @HostListener(`keydown.arrowLeft`, [`$event`, `-1`])
    onHorizontal(event: Event, step: number): void {
        if (this.orientation !== `horizontal` || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    @HostListener(`keydown.arrowDown`, [`$event`, `1`])
    @HostListener(`keydown.arrowUp`, [`$event`, `-1`])
    onVertical(event: Event, step: number): void {
        if (this.orientation !== `vertical` || !event.target) {
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

    private scrollIntoView(targetStepIndex: number): void {
        this.getNativeElements(this.steps)[targetStepIndex].scrollIntoView(
            this.orientation === `vertical`
                ? ONLY_VERTICAL_SCROLL
                : ONLY_HORIZONTAL_SCROLL,
        );
    }
}
