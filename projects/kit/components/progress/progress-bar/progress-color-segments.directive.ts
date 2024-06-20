import {ChangeDetectorRef, Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [ResizeObserverService],
    host: {'[style.--tui-progress-color]': 'color()'},
})
export class TuiProgressColorSegmentsDirective {
    private readonly colors$ = new BehaviorSubject<string[]>([]);
    private readonly el = tuiInjectElement<HTMLProgressElement>();
    private readonly resize$ = inject(ResizeObserverService);

    protected readonly color = toSignal(
        combineLatest([
            this.colors$,
            this.resize$.pipe(
                map(() => this.el.offsetWidth),
                distinctUntilChanged(),
            ),
        ]).pipe(
            map(([colors, width]) => {
                const segmentWidth = Math.ceil(width / colors.length);
                const colorsString = colors.reduce(
                    (acc, color, i) =>
                        `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
                    '',
                );

                return `linear-gradient(to right ${colorsString})`;
            }),
            tuiWatch(inject(ChangeDetectorRef)),
        ),
    );

    @Input('tuiProgressColorSegments')
    public set colors(colors: string[]) {
        this.colors$.next(colors);
    }
}
