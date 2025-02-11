import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiFadeIn, tuiSlideIn} from '@taiga-ui/core/animations';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    standalone: true,
    selector: 'tui-drawer',
    imports: [TuiButton, TuiScrollbar],
    templateUrl: './drawer.template.html',
    styleUrls: ['./drawer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'secondary',
            size: 's',
        }),
    ],
    animations: [tuiSlideIn, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideIn]': 'animation',
        '[class._overlay]': 'overlay',
        '[style.border-top-left-radius]': 'direction === "left" ? 0 : null',
        '[style.border-top-right-radius]': 'direction === "right" ? 0 : null',
        '[style.left]': 'direction === "left" ? 0 : null',
        '[style.right]': 'direction === "right" ? 0 : null',
    },
})
export class TuiDrawer {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public direction: TuiHorizontalDirection = 'right';

    @Input()
    public overlay = false;

    protected get animation(): AnimationOptions & {value: string} {
        return {...this.options, value: this.direction};
    }
}
