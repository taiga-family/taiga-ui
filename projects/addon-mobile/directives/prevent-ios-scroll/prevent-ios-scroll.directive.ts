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
    styleUrls: ['./prevent-ios-scroll.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-prevent-ios-scroll-styles',
    },
})
class TuiPreventIOSScrollStyles {}

@Directive({
    standalone: true,
    selector: 'input[tuiPreventIOSScroll]',
})
export class TuiPreventIOSScroll {
    protected readonly nothing = tuiWithStyles(TuiPreventIOSScrollStyles);
}
