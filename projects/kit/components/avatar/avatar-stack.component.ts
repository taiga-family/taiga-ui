import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-avatar-stack',
    template: '<ng-content />',
    styleUrls: ['./avatar-stack.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-direction]': 'direction',
    },
})
export class TuiAvatarStack {
    @Input()
    public direction: TuiHorizontalDirection = 'right';
}
