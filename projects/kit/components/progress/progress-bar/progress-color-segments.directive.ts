import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {
    CHROMIUM_EDGE_START_VERSION,
    TuiDestroyService,
    tuiIsEdgeOlderThan,
    tuiPure,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

function calculateColorSegments(colors: string[], progressWidth: number): string {
    const segmentWidth = Math.ceil(progressWidth / colors.length);
    const colorsString = colors.reduce(
        (acc, color, i) =>
            `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
        '',
    );

    return `linear-gradient(to right ${colorsString})`;
}

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [TuiDestroyService, TuiResizeService],
    host: {
        '[$.style.--tui-progress-color]': 'calcSegments$',
        '($.style.--tui-progress-color)': '0',
    },
})
export class TuiProgressColorSegmentsDirective {
    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    private readonly isOldBrowsers = tuiIsEdgeOlderThan(
        CHROMIUM_EDGE_START_VERSION,
        this.userAgent,
    );

    private readonly colors$ = new BehaviorSubject<string[]>([]);

    @Input('tuiProgressColorSegments')
    set colors(colors: string[]) {
        this.colors$.next(colors);
    }

    @tuiPure
    get calcSegments$(): Observable<string> {
        return combineLatest([
            this.colors$,
            this.resize$.pipe(
                map(() => this.el.nativeElement.offsetWidth),
                distinctUntilChanged(),
            ),
        ]).pipe(
            map(([colors, width]) =>
                this.isOldBrowsers ? colors[0] : calculateColorSegments(colors, width),
            ),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLProgressElement>,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}
}
