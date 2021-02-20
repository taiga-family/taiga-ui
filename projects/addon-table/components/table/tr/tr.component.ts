import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {map, startWith} from 'rxjs/operators';
import {TuiCellContext, TuiCellDirective} from '../directives/cell.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';

@Component({
    selector: 'tr[tuiTr]',
    templateUrl: './tr.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiTrComponent<T> {
    @Input()
    tuiTr!: T;

    @ContentChildren(forwardRef(() => TuiCellDirective))
    readonly cells: QueryList<TuiCellDirective<T, keyof T>> = EMPTY_QUERY;

    readonly toContext = (value: T[keyof T]) => new TuiCellContext(value);

    readonly cells$ = this.cells.changes.pipe(
        startWith(null),
        map(() =>
            this.cells.reduce<Record<any, TuiCellDirective<T, keyof T>>>(
                (record, item) => ({...record, [item.tuiCell]: item}),
                {},
            ),
        ),
    );

    constructor(
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}
}
