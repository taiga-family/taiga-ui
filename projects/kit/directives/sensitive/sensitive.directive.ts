import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWatch, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

const rowsInSvg = 3;

@Component({
    template: '',
    styleUrl: './sensitive.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-sensitive'},
})
class Styles {}

@Directive({
    selector: '[tuiSensitive]',
    providers: [ResizeObserverService],
    host: {
        '[style.--t-offset.px]': 'offset',
        '[style.--t-mask-height.px]': 'height()',
        '[class.tui-sensitive]': 'tuiSensitive()',
    },
})
export class TuiSensitive {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly offset = Math.round(Math.random() * 10) * 10;
    protected readonly height = toSignal(
        inject(ResizeObserverService, {self: true}).pipe(
            map((entry): [number, number] => {
                const height = entry[0]?.contentRect.height ?? 0;

                return [Math.max(2, Math.floor(height / 16) + 1), height];
            }),
            map(([rows, height]) => height * (rowsInSvg / rows)),
            tuiZonefull(),
            tuiWatch(),
        ),
    );

    public readonly tuiSensitive = input<boolean | null>(false);
}
