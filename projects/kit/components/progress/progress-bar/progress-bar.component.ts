import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {MODE_PROVIDER, TUI_MODE} from '@taiga-ui/core';

@Component({
    selector: 'progress[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiProgressBarComponent {
    @Input()
    @HostBinding('style.--tui-progress-color')
    public color?: string;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXS | TuiSizeXXL = 'm';

    protected readonly mode$ = inject(TUI_MODE);
}
