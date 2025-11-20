import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core/types';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    selector: 'progress[tuiProgressBar]',
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/progress-bar.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--tui-progress-color]': 'color()',
        '[attr.data-size]': 'size()',
    },
})
export class TuiProgressBar {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    public readonly color = input(this.options.color);

    public readonly size = input<TuiSizeXXL | TuiSizeXXS>(this.options.size);
}
