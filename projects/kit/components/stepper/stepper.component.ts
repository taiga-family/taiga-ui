import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    ElementRef,
    forwardRef,
    inject,
    input,
    model,
    type OnChanges,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {type TuiOrientation} from '@taiga-ui/core/types';

import {TuiStep} from './step.component';

@Component({
    selector: 'tui-stepper, nav[tuiStepper]',
    template: `
        <ng-content />
    `,
    styleUrl: './stepper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResizeObserverService],
    host: {
        '[attr.data-orientation]': 'orientation()',
        '(keydown.arrowRight)': 'onHorizontal($event, 1)',
        '(keydown.arrowLeft)': 'onHorizontal($event, -1)',
        '(keydown.arrowDown)': 'onVertical($event, 1)',
        '(keydown.arrowUp)': 'onVertical($event, -1)',
    },
})
export class TuiStepperComponent implements OnChanges {
    private readonly el = tuiInjectElement();
    private readonly steps = contentChildren(
        forwardRef(() => TuiStep),
        {read: ElementRef},
    );

    protected readonly $ = inject(ResizeObserverService, {self: true})
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.scrollIntoView(this.activeItemIndex()));

    public readonly orientation = input<TuiOrientation>('horizontal');
    public readonly activeItemIndex = model(0);

    public ngOnChanges(): void {
        this.scrollIntoView(this.activeItemIndex());
    }

    public indexOf(step: HTMLElement): number {
        const index = this.steps().findIndex(({nativeElement}) => nativeElement === step);

        return index < 0 ? NaN : index;
    }

    public isActive(index: number): boolean {
        return index === this.activeItemIndex();
    }

    public activate(index: number): void {
        if (this.activeItemIndex() === index) {
            return;
        }

        this.activeItemIndex.set(index);
        this.scrollIntoView(index);
    }

    protected onHorizontal(event: Event, step: number): void {
        if (this.orientation() !== 'horizontal' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    protected onVertical(event: Event, step: number): void {
        if (this.orientation() !== 'vertical' || !event.target) {
            return;
        }

        event.preventDefault();
        this.moveFocus(event.target, step);
    }

    private moveFocus(current: EventTarget, step: number): void {
        if (!tuiIsElement(current)) {
            return;
        }

        const stepElements = this.steps().map(({nativeElement}) => nativeElement);
        const index = stepElements.findIndex((element) => element === current);

        tuiMoveFocus(index, stepElements, step);
    }

    private scrollIntoView(index: number): void {
        const step = this.steps()[index]?.nativeElement;

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

        this.el.scrollTo?.({left: Math.max(0, left), top: Math.max(0, top)});
    }
}
