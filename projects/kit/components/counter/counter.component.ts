import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiInputNumberStepService} from '@taiga-ui/kit/components/input-number';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiFluidTypography} from '@taiga-ui/kit/directives/fluid-typography';

import {TUI_COUNTER_OPTIONS} from './counter.options';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';

@Component({
    standalone: true,
    selector: 'tui-counter',
    imports: [TuiButton, TuiFade, TuiFluidTypography],
    templateUrl: './counter.template.html',
    styleUrls: ['./counter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiInputNumberStepService, tuiFallbackValueProvider(0)],
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-appearance]': 'appearance',
    },
})
export class TuiCounter extends TuiControl<number> {
    protected readonly options = inject(TUI_COUNTER_OPTIONS);
    protected readonly hold = inject(TuiInputNumberStepService);
    protected readonly $ = this.hold.steps$.subscribe((value) => this.onStep(value));

    @Input()
    public step = this.options.step;

    @Input()
    public size = this.options.size;

    @Input()
    public min = this.options.min;

    @Input()
    public max = this.options.max;

    @Input()
    public appearance = this.options.appearance;

    protected get limit(): number {
        switch (this.size) {
            case 'l':
                return 1.25;
            case 'm':
                return 1;
            case 's':
                return 13 / 16;
        }
    }

    protected onStep(step: number): void {
        this.onChange(tuiClamp(tuiSum(this.value(), step), this.min, this.max));
    }
}
