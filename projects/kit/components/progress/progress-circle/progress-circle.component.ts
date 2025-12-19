import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrl: './progress-circle.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
        '[style.--tui-progress-color]': 'color()',
        '[style.--t-progress-ratio]': 'ratio()',
        '[class._arc]': 'arc()',
    },
})
export class TuiProgressCircle {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    protected readonly ratio = computed((ratio = this.value() / this.max()) =>
        Number.isFinite(ratio) ? ratio : 0,
    );

    public readonly value = input(0);
    public readonly max = input(1);
    public readonly color = input<string | null>(this.options.color);
    public readonly size = input(this.options.size);
    public readonly arc = input(false, {transform: coerceBooleanProperty});
}
