import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFadeIn, tuiScaleIn} from '@taiga-ui/core/animations';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    standalone: true,
    selector: 'tui-pulse',
    template: '',
    styleUrls: ['./pulse.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsRectAccessor(TuiPulse)],
    animations: [tuiFadeIn, tuiScaleIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiScaleIn]': 'animation',
        '[class._playing]': 'playing',
    },
})
export class TuiPulse extends TuiRectAccessor {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();

    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public playing = true;

    public readonly type = 'hint';

    public getClientRect(): DOMRect {
        const rect = this.el.getBoundingClientRect();

        return this.isBrowser
            ? new DOMRect(rect.x - 4, rect.y - 4, rect.width + 8, rect.height + 8)
            : rect;
    }
}
