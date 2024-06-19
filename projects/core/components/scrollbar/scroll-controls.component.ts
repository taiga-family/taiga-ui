import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs';

import {TuiScrollbarDirective} from './scrollbar.directive';

@Component({
    standalone: true,
    selector: 'tui-scroll-controls',
    imports: [NgIf, AsyncPipe, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
})
export class TuiScrollControls {
    private readonly scrollRef = inject(TUI_SCROLL_REF).nativeElement;

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly refresh$ = inject(ANIMATION_FRAME).pipe(
        throttleTime(300),
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(inject(NgZone)),
    );

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
