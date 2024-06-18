import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON, TUI_ICON_RESOLVER} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    host: {
        '[class._duo]': 'background',
        '[style.--t-mask]': '"url(" + resolver(icon) + ")"',
        '[style.--t-mask-bg]': 'background ? "url(" + resolver(background) + ")" : null',
    },
    styleUrls: ['./icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiIcon {
    protected readonly resolver: TuiStringHandler<string> = inject(TUI_ICON_RESOLVER);

    @Input()
    public icon = inject(TUI_ICON);

    @Input()
    public background = '';
}
