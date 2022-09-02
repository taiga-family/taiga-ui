import type {AnimationOptions} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    NgZone,
    Optional,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiInjectionTokenType, tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_ANIMATION_OPTIONS, TUI_MODE, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs/operators';

@Component({
    selector: `tui-scroll-controls`,
    templateUrl: `./scroll-controls.template.html`,
    styleUrls: [`./scroll-controls.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
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

    readonly animation = {
        value: ``,
        ...this.options,
    } as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Optional()
        @Inject(TUI_SCROLL_REF)
        private readonly scrollRef: TuiInjectionTokenType<typeof TUI_SCROLL_REF> | null,
        @Inject(ANIMATION_FRAME)
        private readonly animationFrame$: TuiInjectionTokenType<typeof ANIMATION_FRAME>,
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
    ) {}

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef
            ? this.scrollRef.nativeElement
            : this.documentRef.documentElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
