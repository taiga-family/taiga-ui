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
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_RTL_SELECTOR} from '@taiga-ui/cdk/constants';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {type TuiOrientation} from '@taiga-ui/core/types';

import {TuiStep} from './step.component';

@Component({
    selector: 'tui-stepper',
    template: `
        <ng-content />
    `,
    styleUrl: './stepper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WaResizeObserverService],
    host: {
        '[attr.data-orientation]': 'orientation()',
        '(keydown.arrowDown)': 'onVertical($event, 1)',
        '(keydown.arrowLeft)': 'onHorizontal($event, -1)',
        '(keydown.arrowRight)': 'onHorizontal($event, 1)',
        '(keydown.arrowUp)': 'onVertical($event, -1)',
    },
})
export class TuiStepperComponent implements OnChanges {
    private readonly el = tuiInjectElement();

    private readonly steps = contentChildren(
        forwardRef(() => TuiStep),
        {read: ElementRef},
    );

    protected readonly $ = inject(WaResizeObserverService, {self: true})
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.scrollIntoView(this.activeItemIndex()));

    public readonly orientation = input<TuiOrientation>('horizontal');
    public readonly activeItemIndex = model(0);

    public ngOnChanges(): void {
        this.scrollIntoView(this.activeItemIndex());
    }

    public indexOf(step: HTMLElement): number {
        const index = this.steps().findIndex(({nativeElement}) => nativeElement === step);

        return index < 0 ? Number.NaN : index;
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

        const {clientHeight, clientWidth, offsetTop, offsetLeft, scrollWidth} = this.el;

        const {
            offsetHeight,
            offsetWidth,
            offsetTop: stepOffsetTop,
            offsetLeft: stepOffsetLeft,
        } = step;

        const top = stepOffsetTop - offsetTop - clientHeight / 2 + offsetHeight / 2;
        // `offsetLeft` is measured from the left edge while the scroll position
        // is measured from the start edge, which is the right edge in RTL
        const center = stepOffsetLeft - offsetLeft + offsetWidth / 2;
        const direction = this.el.matches(TUI_RTL_SELECTOR) ? -1 : 1;
        const left =
            direction === -1
                ? scrollWidth - center - clientWidth / 2
                : center - clientWidth / 2;

        this.el.scrollTo?.({
            left: direction * Math.max(0, left),
            top: Math.max(0, top),
        });
    }
}
