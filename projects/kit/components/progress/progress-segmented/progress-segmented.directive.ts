import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./progress-segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-progress-segmented'},
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
export class TuiProgressSegmented {
    protected readonly nothing = tuiWithStyles(TuiProgressSegmentedStyles);

    @Input()
    public segments = 1;
}
