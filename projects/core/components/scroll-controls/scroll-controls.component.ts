import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    NgZone,
    Optional,
} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {interval, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

// @bad TODO: handle click on bar to scroll to that position
// @dynamic
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
    readonly refresh$ = interval(300).pipe(
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(this.ngZone),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Optional()
        @Inject(TUI_SCROLL_REF)
        private readonly scrollRef: ElementRef<HTMLElement> | null,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
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
