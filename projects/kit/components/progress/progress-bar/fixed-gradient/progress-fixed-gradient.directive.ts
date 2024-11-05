import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./progress-fixed-gradient.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-fixed-gradient',
    },
})
class TuiProgressFixedGradientStyles {}

@Directive({
    standalone: true,
    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
    host: {
        '[style.--tui-progress-percent.%]': 'progressPercent',
    },
})
export class TuiProgressFixedGradientDirective {
    private readonly nativeProgress = tuiInjectElement<HTMLProgressElement>();
    protected readonly nothing = tuiWithStyles(TuiProgressFixedGradientStyles);

    protected get progressPercent(): number {
        const value = this.nativeProgress.value;
        const max = this.nativeProgress.max ?? 1;

        return Math.min((value / max) * 100, 100);
    }
}
