import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'progress[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressBar {
    @Input()
    @HostBinding('style.--tui-progress-color')
    public color?: string;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXS | TuiSizeXXL = 'm';
}
