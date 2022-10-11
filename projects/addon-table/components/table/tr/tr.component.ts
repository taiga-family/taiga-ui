import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    Inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {tuiLightweightToken} from '@taiga-ui/core';
import {map, startWith} from 'rxjs/operators';

import {TuiCellDirective} from '../directives/cell.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import type {TuiTbodyComponent} from '../tbody/tbody.component';
import {TuiTbodyToken} from '../tbody/tbody.token';
import {TuiTrToken} from './tr.token';

@Component({
    selector: `tr[tuiTr]`,
    templateUrl: `./tr.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiLightweightToken(TuiTrToken, TuiTrComponent), ...TUI_TABLE_PROVIDER],
})
export class TuiTrComponent<T extends Partial<Record<keyof T, any>>> {
    @ContentChildren(forwardRef(() => TuiCellDirective))
    private readonly cells: QueryList<TuiCellDirective> = EMPTY_QUERY;

    readonly cells$ = this.cells.changes.pipe(
        startWith(null),
        map(() =>
            this.cells.reduce(
                (record, item) => ({...record, [item.tuiCell]: item}),
                {} as Record<keyof T | string, TuiCellDirective>,
            ),
        ),
    );

    readonly item$ = this.body.rows.changes.pipe(
        startWith(null),
        map(
            () =>
                this.body.sorted[
                    this.body.rows.toArray().findIndex(row => row === this)
                ] as Record<keyof T | string, any>,
        ),
    );

    constructor(
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
        @Inject(forwardRef(() => TuiTbodyToken))
        private readonly body: TuiTbodyComponent<T>,
    ) {}
}
