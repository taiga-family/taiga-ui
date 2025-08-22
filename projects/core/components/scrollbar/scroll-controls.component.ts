import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {distinctUntilChanged, map, startWith} from 'rxjs';

import {TuiScrollbarDirective} from './scrollbar.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

@Component({
    standalone: true,
    selector: 'tui-scroll-controls',
    imports: [NgIf, TuiAnimated, TuiScrollbarDirective],
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiScrollControls {
    private readonly scrollRef: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;

    protected readonly nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
    protected readonly refresh$ = inject(WA_ANIMATION_FRAME).pipe(
        map(() => this.scrollbars),
        startWith([false, false] as [boolean, boolean]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    protected readonly refresh = toSignal(this.refresh$, {
        initialValue: [false, false] as [boolean, boolean],
    });

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef;

        return [scrollHeight > clientHeight + 1, scrollWidth > clientWidth + 1];
    }
}
