import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/status.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-status'},
})
class Styles {}

@Directive({
    selector: '[tuiStatus]',
    host: {
        tuiStatus: '',
        '[style.--t-status]': 'tuiStatus() || null',
    },
})
export class TuiStatus {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiStatus = input('');
}
