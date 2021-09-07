import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'progress[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    host: {
        '[style.--tui-progress-color]': 'color',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressBarComponent {
    @Input()
    @tuiDefaultProp()
    color = 'var(--tui-primary)';

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';
}
