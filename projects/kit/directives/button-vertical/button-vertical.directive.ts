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
    styleUrls: ['./button-vertical.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-vertical-styles',
    },
})
class TuiButtonVerticalStyles {}

@Directive({
    standalone: true,
    selector: '[tuiButtonVertical]',
})
export class TuiButtonVertical {
    protected readonly nothing = tuiWithStyles(TuiButtonVerticalStyles);
}
