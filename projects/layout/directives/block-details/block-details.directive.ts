import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./block-details.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-block-details-styles',
    },
})
class TuiBlockDetailsStyles {}

@Directive({
    standalone: true,
    selector: '[tuiBlockDetails]',
})
export class TuiBlockDetails {
    protected readonly nothing = tuiWithStyles(TuiBlockDetailsStyles);
}
