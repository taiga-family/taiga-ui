import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiPure, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icon.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-icon',
    },
})
class TuiIconStyles {}

@Directive({
    standalone: true,
    selector: 'tui-icon',
    host: {
        '[style.--t-icon]': 'getUrl(icon)',
        '[style.--t-icon-bg]': 'getBackground(background)',
    },
})
export class TuiIcon<Icon extends string = string> {
    protected readonly nothing = tuiWithStyles(TuiIconStyles);
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    @Input()
    public icon = (inject(TUI_ICON_START, {self: true, optional: true}) ||
        inject(TUI_ICON_END, {self: true, optional: true}) ||
        '') as Icon | (Record<never, never> & string);

    @Input()
    public background = '';

    @tuiPure
    protected getUrl(icon: string): string {
        return `url(${this.resolver(icon)})`;
    }

    @tuiPure
    protected getBackground(background: string): string | null {
        return background ? `url(${this.resolver(background)})` : null;
    }
}
