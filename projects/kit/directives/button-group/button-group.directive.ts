import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./button-group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-button-group'},
})
class Styles {}

@Directive({
    selector: '[tuiButtonGroup]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
})
export class TuiButtonGroup {}
