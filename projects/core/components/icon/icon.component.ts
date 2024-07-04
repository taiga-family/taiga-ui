import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    styleUrls: ['./icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._duo]': 'background',
        '[style.--t-mask]': '"url(" + resolver(icon) + ")"',
        '[style.--t-mask-bg]': 'background ? "url(" + resolver(background) + ")" : null',
    },
})
export class TuiIcon {
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    @Input()
    public icon =
        inject(TUI_ICON_START, {self: true, optional: true}) ||
        inject(TUI_ICON_END, {self: true, optional: true}) ||
        '';

    @Input()
    public background = '';
}
