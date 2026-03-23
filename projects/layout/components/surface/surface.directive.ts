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
    styleUrl: './surface.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-surface-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiSurface]',
    host: {tuiSurface: ''},
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(Styles);
}
