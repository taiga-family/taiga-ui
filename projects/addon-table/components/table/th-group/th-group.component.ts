import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    contentChildren,
    forwardRef,
    inject,
} from '@angular/core';

import {TuiTableHead} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTableTh} from '../th/th.component';

@Component({
    selector: 'tr[tuiThGroup]',
    imports: [NgTemplateOutlet, TuiTableTh],
    templateUrl: './th-group.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiTableThGroup<T extends Partial<Record<keyof T, unknown>>> {
    protected readonly th = contentChild<TuiTableTh<T>>(forwardRef(() => TuiTableTh));

    protected readonly heads = contentChildren<TuiTableHead<T>>(
        forwardRef(() => TuiTableHead),
    );

    protected readonly computedHeads = computed<
        Record<string | keyof T, TuiTableHead<T>>
    >(() => {
        return this.heads().reduce(
            (record, item) => ({...record, [item.tuiHead()]: item}),
            {} as Record<string | keyof T, TuiTableHead<T>>,
        );
    });

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );
}
