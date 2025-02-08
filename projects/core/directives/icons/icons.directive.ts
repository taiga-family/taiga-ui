import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

/**
 * Workaround for {@link TuiAvatar} to properly handle icon color in {@link TuiAppearance}
 */
type Icon = SafeResourceUrl | string | null | undefined;

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icons.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-icons',
    },
})
class TuiIconsStyles {}

@Directive({
    standalone: true,
    host: {
        tuiIcons: '',
        '[style.--t-icon-start]':
            'iconStart ? "url(" + resolver(iconStart.toString()) + ")" : null',
        '[style.--t-icon-end]': 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null',
    },
})
export class TuiIcons {
    protected readonly nothing = tuiWithStyles(TuiIconsStyles);
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    @Input()
    public iconStart: Icon = inject(TUI_ICON_START, {self: true, optional: true}) || '';

    @Input()
    public iconEnd = inject(TUI_ICON_END, {self: true, optional: true}) || '';
}
