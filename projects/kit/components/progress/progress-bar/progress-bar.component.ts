import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `progress[tuiProgressBar]`,
    template: ``,
    styleUrls: [`./progress-bar.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressBarComponent {
    @Input()
    @HostBinding(`style.--tui-progress-color`)
    color?: string;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = `m`;
}
