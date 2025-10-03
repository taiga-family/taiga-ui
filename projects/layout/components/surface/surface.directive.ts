import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrls: ['./surface.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-surface'},
})
class Styles {}

@Directive({
    selector: '[tuiSurface]',
    host: {tuiSurface: ''},
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(Styles);
}
