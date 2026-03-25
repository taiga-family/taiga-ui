import {computed, Directive, inject, input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, map} from 'rxjs';

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
    providers: [WaResizeObserverService],
    host: {'[style.--tui-progress-color]': 'gradient()'},
})
export class TuiProgressColorSegments {
    private readonly el = tuiInjectElement<HTMLProgressElement>();

    private readonly width = toSignal(
        inject(WaResizeObserverService, {self: true}).pipe(
            map(([x]) => x?.contentRect.width ?? 0),
            distinctUntilChanged(),
        ),
        {initialValue: this.el.offsetWidth},
    );

    protected readonly gradient = computed((colors = this.colors()) => {
        if (!colors.length) {
            return null;
        }

        const segmentWidth = this.width() / colors.length;
        const colorsString = colors.reduce(
            (acc, color, i) =>
                `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
            '',
        );

        return `linear-gradient(to right${colorsString})`;
    });

    public readonly colors = input<readonly string[]>([], {
        alias: 'tuiProgressColorSegments',
    });
}
