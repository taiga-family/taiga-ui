import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core/tokens';

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
        '[class._icon-left]': 'iconLeft',
        '[class._icon-right]': 'iconRight',
        '[style.--t-mask-left]': '"url(" + resolver(iconLeft) + ")"',
        '[style.--t-mask-right]': '"url(" + resolver(iconRight) + ")"',
    },
})
export class TuiIcons {
    protected readonly nothing = tuiWithStyles(TuiIconsStyles);
    protected readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);

    @Input()
    public iconLeft = '';

    @Input()
    public iconRight = '';
}
