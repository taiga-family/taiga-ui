import {AnimationOptions} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    NgZone,
    OnInit,
    Optional,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiScrollbarsOptions} from '@taiga-ui/core/interfaces';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_MODE,
    TUI_SCROLL_REF,
    TUI_SCROLLBARS_OPTIONS,
} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith, throttleTime} from 'rxjs/operators';

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
export class TuiScrollControlsComponent implements OnInit {
    @Input() hidden = false;

    get isScrollbarsModeCustom(): boolean {
        return this.scrollbarsOptions.mode === 'custom';
    }

    scrollElement: HTMLElement;

    readonly refresh$ = this.animationFrame$.pipe(
        throttleTime(300),
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(this.ngZone),
    );

    readonly animation = {
        value: '',
        ...this.options,
    } as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(DOCUMENT) documentRef: Document,
        @Optional()
        @Inject(TUI_SCROLL_REF)
        scrollRef: ElementRef<HTMLElement> | null,
        @Inject(TUI_SCROLLBARS_OPTIONS)
        private readonly scrollbarsOptions: TuiScrollbarsOptions,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {
        this.scrollElement = scrollRef
            ? scrollRef.nativeElement
            : documentRef.documentElement;
    }

    ngOnInit(): void {
        this.configScrollbars();
    }

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }

    private configScrollbars(): void {
        if (this.isScrollbarsModeCustom || this.hidden) {
            this.scrollElement.classList.add('tui-zero-scrollbar');
        }
    }
}
