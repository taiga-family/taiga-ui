import {type BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core/types';
import {delay, of} from 'rxjs';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrl: './progress-circle.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[style.--tui-progress-color]': 'color',
        '[style.--t-progress-ratio]': 'progressRatio',
        '[class._arc]': 'arc',
    },
})
export class TuiProgressCircle {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    protected readonly animationDelay = toSignal(of(true).pipe(delay(0)));

    @Input()
    public value = 0;

    @Input()
    public max = 1;

    @Input()
    public color: string | null = this.options.color;

    @Input()
    public size: TuiSizeXXL | TuiSizeXXS = this.options.size;

    @Input({transform: coerceBooleanProperty})
    public arc: BooleanInput = false;

    protected get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }
}
