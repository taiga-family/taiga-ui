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
    styles: ['@import "@taiga-ui/kit/styles/components/status.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-status',
    },
})
class TuiStatusStyles {}

@Directive({
    standalone: true,
    selector: '[tuiStatus]',
    inputs: ['tuiStatus'],
    host: {
        tuiStatus: '',
        '[style.--t-status]': 'tuiStatus || null',
    },
})
export class TuiStatus {
    protected readonly nothing = tuiWithStyles(TuiStatusStyles);

    public tuiStatus = '';
}
