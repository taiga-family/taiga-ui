import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';
import {delay, of} from 'rxjs';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    standalone: true,
    selector: 'tui-progress-circle',
    imports: [AsyncPipe],
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--tui-progress-color]': 'color',
        '[attr.data-size]': 'size',
        '[style.--progress-ratio]': 'progressRatio',
    },
})
export class TuiProgressCircle {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    protected readonly animationDelay$ = of(true).pipe(delay(0));

    @Input()
    public value = 0;

    @Input()
    public max = 1;

    @Input()
    public color: string | null = this.options.color;

    @Input()
    public size: TuiSizeXXL | TuiSizeXXS = this.options.size;

    protected get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }
}
