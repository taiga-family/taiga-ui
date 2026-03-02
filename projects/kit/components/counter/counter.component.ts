import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiInputNumberStepService} from '@taiga-ui/kit/components/input-number';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiFluidTypography} from '@taiga-ui/kit/directives/fluid-typography';

import {TUI_COUNTER_OPTIONS} from './counter.options';

@Component({
    selector: 'tui-counter',
    imports: [TuiButton, TuiFade, TuiFluidTypography],
    templateUrl: './counter.template.html',
    styleUrl: './counter.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiInputNumberStepService],
    host: {
        '[attr.data-size]': 'size()',
        '[attr.data-appearance]': 'appearance()',
    },
})
export class TuiCounter extends TuiControl<number> {
    protected readonly hold = inject(TuiInputNumberStepService<number>);
    protected readonly $ = this.hold.steps$.subscribe((value) => this.onStep(value));
    protected readonly options = inject(TUI_COUNTER_OPTIONS);
    protected readonly limit = computed(() => {
        switch (this.size()) {
            case 'l':
                return 1.25;
            case 'm':
                return 1;
            case 's':
                return 13 / 16;
        }
    });

    public readonly step = input(this.options.step);
    public readonly size = input(this.options.size);
    public readonly min = input(this.options.min);
    public readonly max = input(this.options.max);
    public readonly appearance = input(this.options.appearance);

    protected onStep(step: number): void {
        this.onChange(tuiClamp(tuiSum(this.value(), step), this.min(), this.max()));
    }
}
