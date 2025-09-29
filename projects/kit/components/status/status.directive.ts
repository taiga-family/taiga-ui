import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/status.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-status'},
})
class Styles {}

@Directive({
    selector: '[tuiStatus]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiStatus: '',
        '[style.--t-status]': 'tuiStatus() || null',
    },
})
export class TuiStatus {
    public readonly tuiStatus = input('');
}
