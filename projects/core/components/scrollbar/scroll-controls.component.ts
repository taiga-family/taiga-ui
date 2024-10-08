import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefreeScheduler, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs';

import {TuiScrollbarDirective} from './scrollbar.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

@Component({
    standalone: true,
    selector: 'tui-scroll-controls',
    imports: [AsyncPipe, NgIf, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
})
export class TuiScrollControls {
    private readonly scrollRef = inject(TUI_SCROLL_REF).nativeElement;

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected readonly refresh$ = inject(WA_ANIMATION_FRAME).pipe(
        throttleTime(300, tuiZonefreeScheduler()),
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
