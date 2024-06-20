import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiScaleIn,
    tuiToAnimationOptions,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-pulse',
    template: '',
    styleUrls: ['./pulse.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiScaleIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiScaleIn]': 'animation',
        '[style.--t-animation-state]': "playing ? 'running' : 'paused'",
    },
})
export class TuiPulse {
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public playing = true;
}
