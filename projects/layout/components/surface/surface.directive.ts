import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './surface.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-surface-v5'},
})
class Styles {}

@Directive({
    selector: '[tuiSurface]',
    host: {tuiSurface: ''},
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(Styles);
}
