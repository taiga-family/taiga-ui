import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-avatar-stack',
    template: '<ng-content></ng-content>',
    styleUrls: ['./avatar-stack.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarStack {
    @Input()
    @HostBinding('attr.data-direction')
    public direction: TuiHorizontalDirection = 'right';
}
