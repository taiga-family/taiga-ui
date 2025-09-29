import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./progress-segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-progress-segmented'},
})
class Styles {}

@Directive({
    selector: '[tuiProgressBar][segments]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        class: '_segmented',
        '[style.--t-segment-width]': '1 / segments()',
    },
})
export class TuiProgressSegmented {
    public readonly segments = input(1);
}
