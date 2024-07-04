import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./icons.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-icons',
    },
})
class TuiIconsStyles {}

@Directive({
    standalone: true,
    selector: '[tuiIcons]:is(never)',
    host: {
        tuiIcons: '',
        '[class._icon-start]': 'iconStart',
        '[class._icon-end]': 'iconEnd',
        '[style.--t-mask-start]': '"url(" + resolver(iconStart) + ")"',
        '[style.--t-mask-end]': '"url(" + resolver(iconEnd) + ")"',
    },
})
export class TuiIcons {
    protected readonly nothing = tuiWithStyles(TuiIconsStyles);
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    @Input()
    public iconStart = inject(TUI_ICON_START, {self: true, optional: true}) || '';

    @Input()
    public iconEnd = inject(TUI_ICON_END, {self: true, optional: true}) || '';
}
