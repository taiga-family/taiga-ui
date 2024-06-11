import {Directive, inject, Input} from '@angular/core';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement, tuiTakeUntilDestroyed} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [ResizeObserverService],
    host: {'[style.--tui-progress-color]': '0'},
})
export class TuiProgressColorSegmentsDirective {
    private readonly colors$ = new BehaviorSubject<string[]>([]);
    private readonly el = tuiInjectElement<HTMLProgressElement>();
    private readonly resize$ = inject(ResizeObserverService);

    protected readonly calcSegments$ = combineLatest([
        this.colors$,
        this.resize$.pipe(
            map(() => this.el.offsetWidth),
            distinctUntilChanged(),
        ),
    ])
        .pipe(
            map(([colors, width]) => {
                const segmentWidth = Math.ceil(width / colors.length);
                const colorsString = colors.reduce(
                    (acc, color, i) =>
                        `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
                    '',
                );

                return `linear-gradient(to right ${colorsString})`;
            }),
            tuiTakeUntilDestroyed(),
        )
        .subscribe(value => this.el.style.setProperty('--tui-progress-color', value));

    @Input('tuiProgressColorSegments')
    public set colors(colors: string[]) {
        this.colors$.next(colors);
    }
}
