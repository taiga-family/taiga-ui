import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./row.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-row'},
})
class Styles {}

@Directive({
    selector: '[tuiCardRow]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
})
export class TuiCardRow {}
