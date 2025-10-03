import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {type TuiLooseUnion} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';

@Component({
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
        '@tui.euro',
        '@tui.dollar-sign',
    ];

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiDocIcons>> = [];

    public iconStart = '';
    public iconEnd = '';
}
