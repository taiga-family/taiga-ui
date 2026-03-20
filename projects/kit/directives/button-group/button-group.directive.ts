import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './button-group.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-button-group-v5'},
})
class Styles {}

@Directive({selector: '[tuiButtonGroup]'})
export class TuiButtonGroup {
    protected readonly nothing = tuiWithStyles(Styles);
}
