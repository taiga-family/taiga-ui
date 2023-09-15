import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeXS,
    TuiSizeXXL,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

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

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}
}
