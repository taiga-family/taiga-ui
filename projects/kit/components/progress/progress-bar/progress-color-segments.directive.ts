import {Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWatch, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [ResizeObserverService],
    host: {'[style.--tui-progress-color]': 'color()'},
})
export class TuiProgressColorSegments {
    private readonly colors$ = new BehaviorSubject<string[]>([]);
    private readonly el = tuiInjectElement<HTMLProgressElement>();

    protected readonly color = toSignal(
        combineLatest([
            this.colors$,
            inject(ResizeObserverService, {self: true}).pipe(
                map(() => this.el.offsetWidth),
                distinctUntilChanged(),
            ),
        ]).pipe(
            map(([colors, width]) => {
                const segmentWidth = width / colors.length;
                const colorsString = colors.reduce((acc, color, i) => {
                    const start = Math.round(i * segmentWidth);
                    const end =
                        i === colors.length - 1
                            ? width
                            : Math.round((i + 1) * segmentWidth);

                    return `${acc}, ${color} ${start}px ${end}px`;
                }, '');

                return `linear-gradient(to right ${colorsString})`;
            }),
            tuiZonefull(),
            tuiWatch(),
        ),
    );

    @Input('tuiProgressColorSegments')
    public set colors(colors: string[]) {
        this.colors$.next(colors);
    }
}
