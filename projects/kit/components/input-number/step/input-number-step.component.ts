import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiClamp, tuiInjectElement, tuiZonefree} from '@taiga-ui/cdk';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_TEXTFIELD_OPTIONS, TuiButton, TuiTextfieldContent} from '@taiga-ui/core';
import {
    BehaviorSubject,
    concat,
    finalize,
    merge,
    switchMap,
    take,
    takeUntil,
    timer,
} from 'rxjs';

import {TuiInputNumberDirective} from '../input-number.directive';
import type {TuiInputNumberOptions} from '../input-number.options';
import {TUI_INPUT_NUMBER_OPTIONS} from '../input-number.options';

@Component({
    standalone: true,
    selector: 'input[tuiInputNumber][step]',
    imports: [NgIf, TuiButton, TuiTextfieldContent],
    templateUrl: './input-number-step.template.html',
    styleUrls: ['./input-number-step.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '(keydown.arrowDown.prevent)': 'onStep(-step())',
        '(keydown.arrowUp.prevent)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumberStep {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly inputNumber = inject(TuiInputNumberDirective, {self: true});
    protected readonly step = signal(this.options.step);

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    protected onStep(step: number): void {
        const {inputNumber} = this;
        const newValue = tuiClamp(
            (inputNumber.value() ?? 0) + step,
            inputNumber.min(),
            inputNumber.max(),
        );

        if (this.inputNumber.value() === null) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    const caretIndex =
                        this.element.value.length - inputNumber.postfix().length;

                    this.element.setSelectionRange(caretIndex, caretIndex);
                });
        }

        this.inputNumber.setValue(newValue);
    }

    protected startStep(event: Event, stepValue: number): void {
        event.preventDefault();
        this.element.focus();

        const button = event.target as HTMLButtonElement;

        const stop$ = merge(
            tuiTypedFromEvent(button, 'mouseup'),
            tuiTypedFromEvent(button, 'mouseleave'),
            tuiTypedFromEvent(button, 'touchend'),
            tuiTypedFromEvent(button, 'touchcancel'),
            tuiTypedFromEvent(document, 'mouseup'),
        );

        const initialDelay = 300;
        const delayDecrement = 30;
        const minDelay = 50;

        const acceleration$ = new BehaviorSubject<number>(initialDelay);

        acceleration$
            .pipe(
                switchMap((delay) => concat(timer(delay).pipe(take(1)), timer(0, delay))),
                takeUntil(stop$),
                tuiZonefree(this.zone),
                takeUntilDestroyed(this.destroyRef),
                finalize(() => acceleration$.complete()),
            )
            .subscribe(() => {
                this.zone.run(() => {
                    this.onStep(stepValue);

                    acceleration$.next(
                        Math.max(acceleration$.value - delayDecrement, minDelay),
                    );
                });
            });
    }
}
