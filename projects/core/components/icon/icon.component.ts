import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {TUI_ICON, tuiInjectIconResolver} from '@taiga-ui/core/tokens';

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
    protected readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    @Input()
    public icon = inject(TUI_ICON);

    @Input()
    public background = '';
}
