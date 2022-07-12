import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {
    CHROMIUM_EDGE_START_VERSION,
    TuiDestroyService,
    tuiIsEdgeOlderThan,
    tuiIsIE,
    tuiPure,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
    host: {
        '[$.style.--tui-progress-color]': 'calcSegments$',
        '($.style.--tui-progress-color)': '0',
    },
    providers: [TuiDestroyService, TuiResizeService],
})
export class TuiProgressColorSegmentsDirective {
    private readonly isOldBrowsers =
        tuiIsEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent) ||
        tuiIsIE(this.userAgent);

    @Input('tuiProgressColorSegments')
    colors: string[] = [];

    @tuiPure
    get calcSegments$(): Observable<string> {
        return this.resize$.pipe(
            map(() =>
                this.isOldBrowsers
                    ? this.colors[0]
                    : calculateColorSegments(
                          this.colors,
                          this.elementRef.nativeElement.offsetWidth,
                      ),
            ),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLProgressElement>,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}
}
