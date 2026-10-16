import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./app-bar-button.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-app-bar-button'},
})
class TuiAppBarButtonStyles {}

@Directive({
    standalone: true,
    selector: '[tuiAppBarButton]',
    hostDirectives: [TuiAnimated],
})
export class TuiAppBarButton {
    protected readonly nothing = tuiWithStyles(TuiAppBarButtonStyles);
}
