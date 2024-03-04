import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    inject,
    type QueryList,
} from '@angular/core';
import {EMPTY_QUERY, tuiQueryListChanges} from '@taiga-ui/cdk';
import {map, ReplaySubject, switchMap} from 'rxjs';

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
export class TuiTrComponent<T extends Partial<Record<keyof T, any>>>
    implements AfterContentInit
{
    @ContentChildren(forwardRef(() => TuiCellDirective))
    private readonly cells: QueryList<TuiCellDirective> = EMPTY_QUERY;

    private readonly body = inject<TuiTbodyComponent<T>>(
        forwardRef(() => TuiTbodyComponent),
    );

    private readonly contentReady$ = new ReplaySubject<boolean>(1);

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    protected readonly cells$ = this.contentReady$.pipe(
        switchMap(() => tuiQueryListChanges(this.cells)),
        map(cells =>
            cells.reduce(
                (record, item) => ({...record, [item.tuiCell]: item}),
                {} as Record<string | keyof T, TuiCellDirective>,
            ),
        ),
    );

    protected readonly item$ = this.contentReady$.pipe(
        switchMap(() => tuiQueryListChanges(this.body.rows)),
        map(
            rows =>
                /**
                 * TODO v4.0 replace `this.body.sorted` with `this.body.data` (don't forget to drop `sorted`-getter).
                 */
                this.body.sorted[rows.findIndex(row => row === this)] as Record<
                    string | keyof T,
                    any
                >,
        ),
    );

    public async ngAfterContentInit(): Promise<void> {
        await Promise.resolve();
        this.contentReady$.next(true);
    }
}
