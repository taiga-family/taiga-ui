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
    styles: ['@import "@taiga-ui/core/styles/components/toast.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-toast',
    },
})
class TuiToastStyles {}

@Directive({
    standalone: true,
    selector: '[tuiToast]',
})
export class TuiToast {
    protected readonly nothing = tuiWithStyles(TuiToastStyles);
}
