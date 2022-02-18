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
    getOriginalArrayFromQueryList,
    itemsQueryListObservable,
    moveFocus,
    tuiAssertIsHTMLElement,
    tuiDefaultProp,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiOrientationT} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

import {TuiStepComponent} from './step/step.component';

@Component({
    selector: 'tui-stepper, nav[tuiStepper]',
    templateUrl: './stepper.template.html',
    styleUrls: ['./stepper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiStepperComponent {
    @ContentChildren(forwardRef(() => TuiStepComponent), {read: ElementRef})
    private readonly steps: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    @HostBinding('attr.data-orientation')
    @tuiDefaultProp()
    orientation: TuiOrientationT = 'horizontal';

    @Input()
    @tuiDefaultProp()
    activeItemIndex = 0;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @tuiPure
    get changes$(): Observable<unknown> {
        // Delay is required to trigger change detection after steps are rendered
        // so they can update their "active" status
        return itemsQueryListObservable(this.steps).pipe(delay(0));
    }

    @HostListener('keydown.arrowRight', ['$event', '1'])
    @HostListener('keydown.arrowLeft', ['$event', '-1'])
    onHorizontal(event: Event, step: number) {
        if (this.orientation !== 'horizontal' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    @HostListener('keydown.arrowDown', ['$event', '1'])
    @HostListener('keydown.arrowUp', ['$event', '-1'])
    onVertical(event: Event, step: number) {
        if (this.orientation !== 'vertical' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    indexOf(step: HTMLElement): number {
        return getOriginalArrayFromQueryList(this.steps).findIndex(
            ({nativeElement}) => nativeElement === step,
        );
    }

    isActive(index: number): boolean {
        return index === this.activeItemIndex;
    }

    activate(index: number) {
        if (this.activeItemIndex === index) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }

    private moveFocus(current: EventTarget, step: number) {
        tuiAssertIsHTMLElement(current);

        const steps = getOriginalArrayFromQueryList(this.steps).map(
            ({nativeElement}) => nativeElement,
        );

        moveFocus(steps.indexOf(current), steps, step);
    }
}
