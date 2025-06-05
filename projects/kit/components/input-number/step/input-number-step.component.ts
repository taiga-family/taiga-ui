import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    inject,
    Input,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TUI_TEXTFIELD_OPTIONS, TuiButton, TuiTextfieldContent} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {expand, map, merge, Subject, switchMap, takeUntil, tap, timer} from 'rxjs';

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
    private readonly INITIAL_DELAY = 300;
    private readonly DELAY_DECREMENT = 15;
    private readonly MIN_DELAY = 100;

    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    protected readonly step = signal(this.options.step);

    protected readonly value = computed(() => this.input.value() ?? NaN);

    protected readonly step$ = new Subject<number>();

    protected readonly stop$ = merge(
        tuiTypedFromEvent(document, 'pointerup'),
        tuiTypedFromEvent(document, 'pointerleave'),
        tuiTypedFromEvent(document, 'pointercancel'),
    );

    protected readonly sub = this.step$
        .pipe(
            switchMap((stepValue) => this.accelerate$(stepValue)),
            tap((stepValue) => this.stepChange(stepValue)),
            takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    protected onStep(step: number): void {
        const {clampedValue} = this.calculateClampedValue(step);

        if (Number.isNaN(this.value())) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.setCaretPosition(this.input));
        }

        this.input.setValue(clampedValue);
    }

    private accelerate$(stepValue: number): Observable<number> {
        this.el.focus();

        let currentDelay = this.INITIAL_DELAY;

        return timer(currentDelay).pipe(
            expand(() => {
                currentDelay = Math.max(
                    currentDelay - this.DELAY_DECREMENT,
                    this.MIN_DELAY,
                );

                return timer(currentDelay);
            }),
            map(() => stepValue),
            takeUntil(this.stop$),
        );
    }

    private stepChange(stepValue: number): void {
        const {input, clampedValue} = this.calculateClampedValue(stepValue);

        this.input.setValue(clampedValue);

        if (this.input.value() === null) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.setCaretPosition(input));
        }
    }

    private setCaretPosition(inputNumber: TuiInputNumberDirective): void {
        const caretIndex = this.el.value.length - inputNumber.postfix().length;

        this.el.setSelectionRange(caretIndex, caretIndex);
    }

    private calculateClampedValue(step: number): {
        clampedValue: number;
        input: TuiInputNumberDirective;
    } {
        const {input} = this;

        return {
            clampedValue: tuiClamp((input.value() ?? 0) + step, input.min(), input.max()),
            input,
        };
    }
}
