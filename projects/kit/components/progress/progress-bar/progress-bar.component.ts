import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {MODE_PROVIDER, TUI_MODE, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

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
    color?: string;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXS | TuiSizeXXL = 'm';

    readonly mode$ = inject(TUI_MODE);
}
