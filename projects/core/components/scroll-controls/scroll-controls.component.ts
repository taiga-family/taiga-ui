import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    NgZone,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_ANIMATION_OPTIONS, TUI_MODE, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs/operators';

@Component({
    selector: 'tui-scroll-controls',
    templateUrl: './scroll-controls.template.html',
    styleUrls: ['./scroll-controls.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiScrollControlsComponent {
    readonly refresh$ = this.animationFrame$.pipe(
        throttleTime(300),
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(this.ngZone),
    );

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) readonly animation: AnimationOptions,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_SCROLL_REF) private readonly scrollRef: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {}

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} =
            this.scrollRef.nativeElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
