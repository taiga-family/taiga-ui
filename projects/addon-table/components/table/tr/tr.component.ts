import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    Inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {map, startWith} from 'rxjs/operators';
import {TuiCellDirective} from '../directives/cell.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTbodyComponent} from '../tbody/tbody.component';

@Component({
    selector: 'tr[tuiTr]',
    templateUrl: './tr.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiTrComponent<T> {
    @ContentChildren(forwardRef(() => TuiCellDirective))
    private readonly cells: QueryList<TuiCellDirective> = EMPTY_QUERY;

    readonly cells$ = this.cells.changes.pipe(
        startWith(null),
        map(() =>
            this.cells.reduce<Record<any, TuiCellDirective>>(
                (record, item) => ({...record, [item.tuiCell]: item}),
                {},
            ),
        ),
    );

    readonly item$ = this.body.rows.changes.pipe(
        startWith(null),
        map(
            () =>
                this.body.sorted[this.body.rows.toArray().findIndex(row => row === this)],
        ),
    );

    constructor(
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
        @Inject(forwardRef(() => TuiTbodyComponent))
        private readonly body: TuiTbodyComponent<T>,
    ) {}
}
