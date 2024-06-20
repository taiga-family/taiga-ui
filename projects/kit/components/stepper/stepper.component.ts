import {AsyncPipe, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {TuiScrollService} from '@taiga-ui/cdk/services';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {
    tuiGetOriginalArrayFromQueryList,
    tuiPure,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import type {TuiOrientation} from '@taiga-ui/core/types';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {delay} from 'rxjs';

import {TuiStep} from './step.component';

@Component({
    standalone: true,
    selector: 'tui-stepper, nav[tuiStepper]',
    imports: [AsyncPipe, NgIf],
    templateUrl: './stepper.template.html',
    styleUrls: ['./stepper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService],
})
export class TuiStepperComponent {
    @ContentChildren(forwardRef(() => TuiStep), {read: ElementRef})
    private readonly steps: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = tuiInjectElement();
    private readonly scrollService = inject(TuiScrollService);
    private readonly resize$ = inject(ResizeObserverService);
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);
    private readonly destroyRef = inject(DestroyRef);

    protected activeItemIndex = 0;

    @Input()
    @HostBinding('attr.data-orientation')
    public orientation: TuiOrientation = 'horizontal';

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    constructor() {
        this.resize$
            .pipe(takeUntilDestroyed())
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

    private moveFocus(current: EventTarget, step: number): void {
        if (!tuiIsElement(current)) {
            return;
        }

        const stepElements = this.steps.toArray().map(({nativeElement}) => nativeElement);
        const index = stepElements.findIndex(element => element === current);

        tuiMoveFocus(index, stepElements, step);
    }

    private scrollIntoView(index: number): void {
        const step = this.steps.get(index)?.nativeElement;

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
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
