import {Directive, ElementRef, inject, Input} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiPure} from '@taiga-ui/cdk';
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged,
    map,
    type Observable,
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
    private readonly el: HTMLProgressElement = inject(ElementRef).nativeElement;
    private readonly resize$ = inject(ResizeObserverService);

    @Input('tuiProgressColorSegments')
    public set colors(colors: string[]) {
        this.colors$.next(colors);
    }

    @tuiPure
    protected get calcSegments$(): Observable<string> {
        return combineLatest([
            this.colors$,
            this.resize$.pipe(
                map(() => this.el.offsetWidth),
                distinctUntilChanged(),
            ),
        ]).pipe(map(([colors, width]) => calculateColorSegments(colors, width)));
    }
}
