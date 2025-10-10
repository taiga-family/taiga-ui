import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './progress-fixed-gradient.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-fixed-gradient'},
})
class Styles {}

@Directive({
    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
    host: {'[style.--tui-progress-percent.%]': 'el.position * 100'},
})
export class TuiProgressFixedGradientDirective {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly el = tuiInjectElement<HTMLProgressElement>();
}
