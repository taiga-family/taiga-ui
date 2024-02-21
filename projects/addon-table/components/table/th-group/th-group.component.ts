import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {map, Observable, startWith} from 'rxjs';

import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiThComponent} from '../th/th.component';

@Component({
    selector: 'tr[tuiThGroup]',
    templateUrl: './th-group.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiThGroupComponent<T extends Partial<Record<keyof T, any>>>
    implements AfterContentInit
{
    @ContentChild(forwardRef(() => TuiThComponent))
    readonly th!: TuiThComponent<T>;

    @ContentChildren(forwardRef(() => TuiHeadDirective))
    readonly heads: QueryList<TuiHeadDirective<T>> = EMPTY_QUERY;

    heads$: Observable<Record<any, TuiHeadDirective<T>>> | null = null;

    readonly table = inject<TuiTableDirective<T>>(forwardRef(() => TuiTableDirective));

    ngAfterContentInit(): void {
        this.heads$ = this.heads.changes.pipe(
            startWith(null),
            map(() =>
                this.heads.reduce(
                    (record, item) => ({...record, [item.tuiHead]: item}),
                    {} as Record<keyof T, TuiHeadDirective<T>>,
                ),
            ),
        );
    }
}
