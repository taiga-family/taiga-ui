import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-avatar-stack',
    template: '<ng-content />',
    styleUrls: ['./avatar-stack.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiAvatarStackV: TUI_VERSION,
        '[attr.data-direction]': 'direction',
    },
})
export class TuiAvatarStack {
    @Input()
    public direction: TuiHorizontalDirection = 'right';
}
