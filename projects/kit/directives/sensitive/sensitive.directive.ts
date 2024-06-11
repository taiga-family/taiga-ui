import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement, tuiPx, tuiWithStyles} from '@taiga-ui/cdk';
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
        '[class.tui-sensitive]': 'tuiSensitive',
    },
})
export class TuiSensitiveDirective {
    private readonly el = tuiInjectElement();
    protected readonly nothing = tuiWithStyles(TuiSensitiveStyles);
    protected readonly offset = Math.round(Math.random() * 10) * 10;

    protected readonly height$ = inject(ResizeObserverService)
        .pipe(
            map(([{contentRect}]) => [
                Math.max(2, Math.floor(contentRect.height / 16) + 1),
                contentRect.height,
            ]),
            map(([rows, height]) => height * (rowsInSvg / rows)),
            takeUntilDestroyed(),
        )
        .subscribe(value => this.el.style.setProperty('--t-mask-height', tuiPx(value)));

    @Input()
    public tuiSensitive: boolean | null = false;
}
