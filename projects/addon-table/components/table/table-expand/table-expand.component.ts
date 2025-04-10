import {
    ChangeDetectionStrategy,
    Component,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';

import {TUI_TABLE_PROVIDER} from '../providers/table.provider';

@Component({
    standalone: true,
    selector: 'tui-table-expand',
    template: '<ng-content />',
    styleUrls: ['./table-expand.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 't-table-expand',
        '[class.t-table-expand_closed]': '!this.expanded()',
    },
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiTableExpand {
    @Input('expanded')
    public set expandedSetter(expanded: boolean) {
        this.expanded.set(expanded);
    }
    public readonly expanded = signal(false);

    public expand(): void {
        this.expanded.update((v) => !v);
    }
}
