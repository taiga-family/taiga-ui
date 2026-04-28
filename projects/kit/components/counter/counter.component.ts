import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {TuiInputNumberStepService} from '@taiga-ui/kit/components/input-number';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiFluidTypography} from '@taiga-ui/kit/directives/fluid-typography';

import {TUI_COUNTER_OPTIONS} from './counter.options';

const LIMIT: Record<TuiSizeL | TuiSizeS, number> = {
    l: 1.25,
    m: 1,
    s: 13 / 16,
};

@Component({
    selector: 'tui-counter',
    imports: [TuiButton, TuiFade, TuiFluidTypography],
    templateUrl: './counter.template.html',
    styleUrl: './counter.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiInputNumberStepService, tuiFallbackValueProvider(0)],
    host: {'[attr.data-appearance]': 'appearance()', '[attr.data-size]': 'size()'},
})
export class TuiCounter extends TuiControl<number> {
    protected readonly hold = inject(TuiInputNumberStepService<number>);
    protected readonly options = inject(TUI_COUNTER_OPTIONS);
    protected readonly limit = computed(() => LIMIT[this.size()]);

    protected readonly $ = this.hold.steps$
        .pipe(takeUntilDestroyed())
        .subscribe((value) => this.onStep(value));

    public readonly step = input(this.options.step);
    public readonly size = input(this.options.size);
    public readonly min = input(this.options.min);
    public readonly max = input(this.options.max);
    public readonly appearance = input(this.options.appearance);

    protected onStep(step: number): void {
        this.onChange(tuiClamp(tuiSum(this.value(), step), this.min(), this.max()));
    }
}
