import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./block-details.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-block-details'},
})
class Styles {}

@Directive({
    selector: '[tuiBlockDetails]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
})
export class TuiBlockDetails {}
