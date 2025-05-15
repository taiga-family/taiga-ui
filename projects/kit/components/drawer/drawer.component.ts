import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-drawer',
    imports: [TuiScrollbar],
    templateUrl: './drawer.template.html',
    styleUrls: ['./drawer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'secondary',
            size: 's',
        }),
    ],
    hostDirectives: [TuiAnimated],
    host: {
        '[class._overlay]': 'overlay',
        '[style.border-top-left-radius]': 'direction === "left" ? 0 : null',
        '[style.border-top-right-radius]': 'direction === "right" ? 0 : null',
        '[style.left]': 'direction === "left" ? 0 : null',
        '[style.right]': 'direction === "right" ? 0 : null',
        '[style.--tui-from]': 'from',
    },
})
export class TuiDrawer {
    @Input()
    public direction: TuiHorizontalDirection = 'right';

    @Input()
    public overlay = false;

    get from(): string {
        return this.direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
    }
}
