import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';

import {TUI_PROGRESS_OPTIONS} from '../progress.options';

@Component({
    standalone: true,
    selector: 'progress[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressBar {
    private readonly options = inject(TUI_PROGRESS_OPTIONS);

    @Input()
    @HostBinding('style.--tui-progress-color')
    public color: string | null = this.options.color;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXXL | TuiSizeXXS = this.options.size;
}
