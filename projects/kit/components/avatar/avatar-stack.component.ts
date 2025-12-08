import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-avatar-stack',
    template: '<ng-content />',
    styleUrl: './avatar-stack.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-direction]': 'direction()',
    },
})
export class TuiAvatarStack {
    public readonly direction = input<TuiHorizontalDirection>('right');
}
