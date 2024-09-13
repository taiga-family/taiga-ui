import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocIcons]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocIcons {
    protected readonly icons = [
        '',
        '@tui.search',
        '@tui.heart',
        '@tui.settings',
        '@tui.chevron-down',
    ];

    public iconStart = '';
    public iconEnd = '';
}
