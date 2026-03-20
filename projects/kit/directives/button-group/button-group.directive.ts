import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './button-group.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-button-group-${TUI_VERSION}`,
})
class Styles {}

@Directive({selector: '[tuiButtonGroup]'})
export class TuiButtonGroup {
    protected readonly nothing = tuiWithStyles(Styles);
}
