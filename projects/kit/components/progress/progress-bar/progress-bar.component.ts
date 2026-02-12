import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core/types';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    selector: 'progress[tuiProgressBar]',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/progress-bar.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.--tui-progress-color]': 'color()',
        '[attr.data-size]': 'size()',
    },
})
export class TuiProgressBar {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    public readonly color = input(this.options.color);
    public readonly size = input<TuiSizeXXL | TuiSizeXXS>(this.options.size);
}
