import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiHorizontalDirection} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit/components/avatar';

@Component({
    standalone: true,
    selector: 'tui-avatar-stack',
    imports: [TuiAvatarComponent],
    template: '<ng-content></ng-content>',
    styleUrls: ['./avatar-stack.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarStackComponent {
    @Input()
    @HostBinding('attr.data-direction')
    direction: TuiHorizontalDirection = 'right';
}
