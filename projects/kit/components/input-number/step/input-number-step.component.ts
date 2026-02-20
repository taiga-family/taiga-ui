import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
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
import {TuiNumberMask} from '../number-mask.directive';

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
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly stop$ = merge(
        fromEvent(this.doc, 'pointerup'),
        fromEvent(this.doc, 'pointerleave'),
        fromEvent(this.doc, 'pointercancel'),
    );

    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly options = inject<TuiInputNumberOptions>(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly mask = inject(TuiNumberMask, {self: true});
    protected readonly input = inject(TuiInputNumberDirective, {self: true});
    protected readonly step$ = new Subject<bigint | number>();

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

    protected onStep(step: bigint | number): void {
        const value = this.input.parsed() || 0;

        this.input.setValue(
            tuiClamp<bigint | number>(
                /**
                 * Without explicit conversion it throws
                 * TS2365: Operator + cannot be applied to types `number | bigint` and `number | bigint`
                 */
                typeof value === 'bigint'
                    ? value + BigInt(step)
                    : tuiSum(value, Number(step)),
                this.mask.min(),
                this.mask.max(),
            ),
        );

        setTimeout((end = Number.MAX_SAFE_INTEGER) => {
            this.el.setSelectionRange(end, end);
        });
    }
}

function getDelay(index: number): number {
    return Math.max(INITIAL_DELAY - index * DELAY_DECREMENT, MIN_DELAY);
}
