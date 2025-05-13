import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

@Component({
    standalone: true,
    selector: 'tui-pulse',
    template: '',
    styleUrls: ['./pulse.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsRectAccessor(TuiPulse)],
    hostDirectives: [TuiAnimated],
    host: {
        '[class._playing]': 'playing',
    },
})
export class TuiPulse extends TuiRectAccessor {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();

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
