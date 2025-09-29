import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./connected.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-connected'},
})
class Styles {}

@Directive({
    standalone: true,
    selector: '[tuiConnected]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
})
export class TuiConnected {}
