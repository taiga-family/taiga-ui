import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    inject,
    type QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {map, type Observable, startWith} from 'rxjs';

import {TuiTableHead} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTableTh} from '../th/th.component';

@Component({
    selector: 'tr[tuiThGroup]',
    imports: [AsyncPipe, NgTemplateOutlet, TuiTableTh],
    templateUrl: './th-group.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiTableThGroup<T extends Partial<Record<keyof T, unknown>>>
    implements AfterContentInit
{
    @ContentChild(forwardRef(() => TuiTableTh))
    protected readonly th!: TuiTableTh<T>;

    @ContentChildren(forwardRef(() => TuiTableHead))
    protected readonly heads: QueryList<TuiTableHead<T>> = EMPTY_QUERY;

    protected heads$: Observable<Record<string | keyof T, TuiTableHead<T>>> | null = null;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    public ngAfterContentInit(): void {
        this.heads$ = this.heads.changes.pipe(
            startWith(null),
            map(() =>
                this.heads.reduce(
                    (record, item) => ({...record, [item.tuiHead()]: item}),
                    {} as Record<string | keyof T, TuiTableHead<T>>,
                ),
            ),
        );
    }
}
