import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    host: {class: 'tui-progress-segmented'},
    template: '',
    styleUrls: ['./progress-segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TuiProgressSegmentedStyles {}

@Directive({
    standalone: true,
    selector: '[tuiProgressBar][segments]',
    host: {
        class: '_segmented',
        '[style.--t-segment-width]': '1 / segments',
    },
})
export class TuiProgressSegmentedDirective {
    @Input()
    public segments = 1;

    protected readonly nothing = tuiWithStyles(TuiProgressSegmentedStyles);
}
