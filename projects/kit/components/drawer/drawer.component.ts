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
        '[class._overlay]': 'overlay()',
        '[style.border-top-left-radius]': 'direction() === "left" ? 0 : null',
        '[style.border-top-right-radius]': 'direction() === "right" ? 0 : null',
        '[style.left]': 'direction() === "left" ? 0 : null',
        '[style.right]': 'direction() === "right" ? 0 : null',
        '[style.--tui-from]':
            'direction() === "right" ? "translateX(100%)" : "translateX(-100%)"',
    },
})
export class TuiDrawer {
    public readonly direction = input<TuiHorizontalDirection>('right');
    public readonly overlay = input(false);
}
