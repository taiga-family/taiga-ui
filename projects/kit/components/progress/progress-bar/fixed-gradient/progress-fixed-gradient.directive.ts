import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Component({
    template: '',
    styleUrls: ['./progress-fixed-gradient.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-fixed-gradient'},
})
class Styles {}

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {'[style.--tui-progress-percent.%]': 'progressPercent'},
})
export class TuiProgressFixedGradientDirective {
    private readonly nativeProgress = tuiInjectElement<HTMLProgressElement>();

    protected get progressPercent(): number {
        const {value} = this.nativeProgress;
        const max = this.nativeProgress.max ?? 1;

        return Math.min((value / max) * 100, 100);
    }
}
