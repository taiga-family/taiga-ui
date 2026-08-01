import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./collapsed.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card-collapsed',
    },
})
class TuiCardCollapsedStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCardCollapsed]',
    host: {
        tuiCardCollapsed: '',
        tuiCardCollapsedV: TUI_VERSION,
        '[style.margin-block-end.rem]': 'collapsed ? 0.75 : 0',
        '[style.clip-path]': 'collapsed ? "inset(-0.75rem)" : "inset(0)"',
    },
})
export class TuiCardCollapsed {
    protected readonly nothing = tuiWithStyles(TuiCardCollapsedStyles);

    @Input('tuiCardCollapsed')
    public collapsed = false;
}
