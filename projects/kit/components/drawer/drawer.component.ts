import type {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {
    TUI_ANIMATIONS_SPEED,
    TuiButton,
    tuiButtonOptionsProvider,
    tuiFadeIn,
    type TuiHorizontalDirection,
    TuiScrollbar,
    tuiSlideIn,
    tuiToAnimationOptions,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-drawer',
    templateUrl: './drawer.template.html',
    styleUrls: ['./drawer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideIn, tuiFadeIn],
    providers: [
        tuiButtonOptionsProvider({
            appearance: 'secondary',
            size: 's',
        }),
    ],
    host: {
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideIn]': 'animation',
        '[class._overlay]': 'overlay',
        '[style.border-start-start-radius]': 'direction === "left" ? 0 : null',
        '[style.border-start-end-radius]': 'direction === "right" ? 0 : null',
        '[style.left]': 'direction === "left" ? 0 : null',
        '[style.right]': 'direction === "right" ? 0 : null',
    },
    imports: [TuiScrollbar, TuiButton],
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
