import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {delay, of} from 'rxjs';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressCircleComponent {
    protected readonly animationDelay$ = of(true).pipe(delay(0));

    @Input()
    public value = 0;

    @Input()
    public max = 1;

    @Input()
    @HostBinding('style.--tui-progress-color')
    public color: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXXL | TuiSizeXXS = 'm';

    @HostBinding('style.--progress-ratio')
    protected get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }
}
