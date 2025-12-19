import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    forwardRef,
    inject,
} from '@angular/core';

import {TuiTableCell} from '../directives/cell.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableTbody} from '../tbody/tbody.component';
import {TuiTableTd} from '../td/td.component';

@Component({
    selector: 'tr[tuiTr]',
    imports: [NgTemplateOutlet, TuiTableTd],
    templateUrl: './tr.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableTr<T extends Partial<Record<keyof T, unknown>>> {
    private readonly cells = contentChildren<TuiTableCell>(
        forwardRef(() => TuiTableCell),
    );

    private readonly body = inject<TuiTableTbody<T>>(forwardRef(() => TuiTableTbody));

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    protected readonly items = computed(() =>
        this.cells().reduce(
            (record, item) => ({...record, [item.tuiCell()]: item}),
            {} as Record<string | keyof T, TuiTableCell>,
        ),
    );

    protected readonly item = computed(
        () =>
            this.body.data()[this.body.rows().findIndex((row) => row === this)] as Record<
                string | keyof T,
                unknown
            >,
    );
}
