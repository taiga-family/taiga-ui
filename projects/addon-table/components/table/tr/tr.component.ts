import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    inject,
    type QueryList,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {distinctUntilChanged, map, ReplaySubject, switchMap} from 'rxjs';

import {TuiTableCell} from '../directives/cell.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTableTbody} from '../tbody/tbody.component';
import {TuiTableTd} from '../td/td.component';

@Component({
    selector: 'tr[tuiTr]',
    imports: [AsyncPipe, NgTemplateOutlet, TuiTableTd],
    templateUrl: './tr.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER, ResizeObserverService],
    host: {
        '[style.--t-row-height.px]': 'height()',
    },
})
export class TuiTableTr<T extends Partial<Record<keyof T, unknown>>>
    implements AfterContentInit
{
    @ContentChildren(forwardRef(() => TuiTableCell))
    private readonly cells: QueryList<TuiTableCell> = EMPTY_QUERY;

    private readonly body = inject<TuiTableTbody<T>>(forwardRef(() => TuiTableTbody));

    private readonly contentReady$ = new ReplaySubject<boolean>(1);

    private readonly rows$ = toObservable(this.body.rows);

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    protected readonly height = toSignal(
        inject(ResizeObserverService, {self: true}).pipe(
            map(([entry]) => entry?.contentRect.height ?? 0),
            distinctUntilChanged(),
            tuiZoneOptimized(),
        ),
        {initialValue: 0},
    );

    protected readonly cells$ = this.contentReady$.pipe(
        switchMap(() => tuiQueryListChanges(this.cells)),
        map((cells) =>
            cells.reduce(
                (record, item) => ({...record, [item.tuiCell()]: item}),
                {} as Record<string | keyof T, TuiTableCell>,
            ),
        ),
    );

    protected readonly item$ = this.contentReady$.pipe(
        switchMap(() => this.rows$),
        map(
            (rows) =>
                this.body.data()[rows.findIndex((row) => row === this)] as Record<
                    string | keyof T,
                    unknown
                >,
        ),
    );

    public ngAfterContentInit(): void {
        Promise.resolve().then(() => this.contentReady$.next(true));
    }
}
