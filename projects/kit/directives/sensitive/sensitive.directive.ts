import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    inject,
    Input,
    NgZone,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiWatch, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

const rowsInSvg = 3;

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./sensitive.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-sensitive-styles',
    },
})
class TuiSensitiveStyles {}

@Directive({
    standalone: true,
    selector: '[tuiSensitive]',
    providers: [ResizeObserverService],
    host: {
        '[style.--t-offset.px]': 'offset',
        '[style.--t-mask-height.px]': 'height()',
        '[class.tui-sensitive]': 'tuiSensitive',
    },
})
export class TuiSensitive {
    protected readonly nothing = tuiWithStyles(TuiSensitiveStyles);
    protected readonly offset = Math.round(Math.random() * 10) * 10;

    protected readonly height = toSignal(
        inject(ResizeObserverService).pipe(
            map(([{contentRect}]) => [
                Math.max(2, Math.floor(contentRect.height / 16) + 1),
                contentRect.height,
            ]),
            map(([rows, height]) => height * (rowsInSvg / rows)),
            tuiZonefull(inject(NgZone)),
            tuiWatch(inject(ChangeDetectorRef)),
        ),
    );

    @Input()
    public tuiSensitive: boolean | null = false;
}
