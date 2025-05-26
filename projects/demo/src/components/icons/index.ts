import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocIcons]',
    imports: [TuiDocAPIItem, TuiTitle, NgIf],
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

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiDocIcons>> = [];

    public iconStart = '';
    public iconEnd = '';
}
