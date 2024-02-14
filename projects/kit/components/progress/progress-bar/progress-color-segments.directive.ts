import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiPure} from '@taiga-ui/cdk';
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged,
    map,
    Observable,
} from 'rxjs';

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
    providers: [ResizeObserverService],
    host: {
        '[$.style.--tui-progress-color]': 'calcSegments$',
        '($.style.--tui-progress-color)': '0',
    },
})
export class TuiProgressColorSegmentsDirective {
    private readonly colors$ = new BehaviorSubject<string[]>([]);

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLProgressElement>,
        @Inject(ResizeObserverService) private readonly resize$: Observable<unknown>,
    ) {}

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
        ]).pipe(map(([colors, width]) => calculateColorSegments(colors, width)));
    }
}
