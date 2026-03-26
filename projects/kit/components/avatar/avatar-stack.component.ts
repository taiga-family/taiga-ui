import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-avatar-stack',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './avatar-stack.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION, '[attr.data-direction]': 'direction()'},
})
export class TuiAvatarStack {
    public readonly direction = input<TuiHorizontalDirection>('end');
}
