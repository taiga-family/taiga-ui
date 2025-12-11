import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearanceProxy} from '@taiga-ui/kit/directives/appearance-proxy';
import {expand, fromEvent, map, merge, Subject, switchMap, takeUntil, timer} from 'rxjs';

import {TuiInputNumberDirective} from '../input-number.directive';
import {
    TUI_INPUT_NUMBER_OPTIONS,
    type TuiInputNumberOptions,
} from '../input-number.options';

const INITIAL_DELAY = 300;
const DELAY_DECREMENT = 15;
const MIN_DELAY = 100;

@Component({
    selector: 'input[tuiInputNumber][step]',
    imports: [TuiButton, TuiTextfieldContent],
    templateUrl: './input-number-step.template.html',
    styleUrl: './input-number-step.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAppearanceProxy],
    host: {
        ngSkipHydration: 'true',
        '(keydown.arrowDown.prevent)': 'onStep(-step())',
        '(keydown.arrowUp.prevent)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumberStep {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    protected readonly value = computed(() => this.input.value() ?? NaN);
    protected readonly step$ = new Subject<number>();
    protected readonly doc = inject(DOCUMENT);

    protected readonly stop$ = merge(
        fromEvent(this.doc, 'pointerup'),
        fromEvent(this.doc, 'pointerleave'),
        fromEvent(this.doc, 'pointercancel'),
    );

    protected readonly stepping = this.step$
        .pipe(
            switchMap((value) =>
                timer(INITIAL_DELAY).pipe(
                    expand((_, index) => timer(getDelay(index))),
                    map(() => value),
                    takeUntil(this.stop$),
                ),
            ),
            takeUntilDestroyed(),
        )
        .subscribe((value) => this.onStep(value));

    public readonly step = input(this.options.step);

    protected onStep(step: number): void {
        const current = this.input.value() ?? 0;

        this.input.setValue(tuiClamp(current + step, this.input.min(), this.input.max()));
        this.el.setSelectionRange(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
}

function getDelay(index: number): number {
    return Math.max(INITIAL_DELAY - index * DELAY_DECREMENT, MIN_DELAY);
}
