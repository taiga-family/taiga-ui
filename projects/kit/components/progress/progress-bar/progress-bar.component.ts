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
    TuiSizeXXL,
    TuiSizeXXS,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TUI_PROGRESS_OPTIONS, TuiProgressOptions} from '../progress.options';

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
    color: string | null = this.options.color;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXXL | TuiSizeXXS = this.options.size;

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PROGRESS_OPTIONS)
        private readonly options: TuiProgressOptions,
    ) {}
}
