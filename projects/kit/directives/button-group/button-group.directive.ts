import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./button-group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-group-styles',
    },
})
class TuiButtonGroupStyles {}

@Directive({
    standalone: true,
    selector: '[tuiButtonGroup]',
})
export class TuiButtonGroupDirective {
    protected readonly nothing = tuiWithStyles(TuiButtonGroupStyles);
}
