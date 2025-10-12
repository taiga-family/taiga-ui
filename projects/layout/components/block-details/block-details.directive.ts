import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './block-details.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-block-details'},
})
class Styles {}

@Directive({
    selector: '[tuiBlockDetails]',
})
export class TuiBlockDetails {
    protected readonly nothing = tuiWithStyles(Styles);
}
