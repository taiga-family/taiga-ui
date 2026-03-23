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
    styleUrl: './block-details.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-block-details-${TUI_VERSION}`,
})
class Styles {}

@Directive({selector: '[tuiBlockDetails]'})
export class TuiBlockDetails {
    protected readonly nothing = tuiWithStyles(Styles);
}
