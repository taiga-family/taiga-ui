import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-drawer',
    imports: [TuiScrollbar],
    templateUrl: './drawer.template.html',
    styleUrl: './drawer.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({appearance: 'secondary', size: 's'})],
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-direction]': 'direction()',
        '[class._overlay]': 'overlay()',
    },
})
export class TuiDrawer {
    public readonly direction = input<TuiHorizontalDirection>('end');
    public readonly overlay = input(false);
}
