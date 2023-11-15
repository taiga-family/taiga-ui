import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

@Component({
    selector: 'tui-icon',
    template: '',
    host: {
        '[style.--t-mask]': '"url(" + resolver(icon) + ")"',
        // TODO: remove Outline hack in 4.0
        '[style.--t-mask-bg]':
            'background ? "url(" + resolver(background).replace("Outline", "") + ")" : null',
    },
    styleUrls: ['./icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiIconComponent {
    @Input()
    icon = '';

    @Input()
    background = '';

    constructor(@Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>) {}
}
