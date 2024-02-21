import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {MODE_PROVIDER, TUI_MODE, TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {delay, of} from 'rxjs';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiProgressCircleComponent {
    @Input()
    value = 0;

    @Input()
    max = 1;

    @Input()
    @HostBinding('style.--tui-progress-color')
    color: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXXL | TuiSizeXXS = 'm';

    readonly animationDelay$ = of(true).pipe(delay(0));

    readonly mode$ = inject(TUI_MODE);

    @HostBinding('style.--progress-ratio')
    get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }
}
