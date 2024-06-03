import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    host: {
        '[class._duo]': 'background',
        '[style.--t-mask]': '"url(" + resolver(icon) + ")"',
        // TODO: remove Outline hack in 4.0
        '[style.--t-mask-bg]':
            'background ? "url(" + resolver(background).replace("Outline", "") + ")" : null',
    },
    styleUrls: ['./icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiIconComponent {
    protected readonly resolver = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);

    @Input()
    public icon = '';

    @Input()
    public background = '';
}
