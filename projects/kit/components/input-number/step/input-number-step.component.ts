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

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    protected readonly step = signal(this.options.step);
    protected readonly value = computed(() => this.input.value() ?? NaN);

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    protected onStep(step: number): void {
        const current = Number.isNaN(this.value()) ? 0 : this.value();
        const value = tuiClamp(current + step, this.input.min(), this.input.max());

        if (Number.isNaN(this.value())) {
            timer(0)
                .pipe(tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    const caretIndex = this.el.value.length - this.input.postfix().length;

                    this.el.setSelectionRange(caretIndex, caretIndex);
                });
        }

        this.input.setValue(value);
    }

    protected startStep(event: Event, stepValue: number): void {
        event.preventDefault();
        this.el.focus();

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
