import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    Inject,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiThComponent} from '../th/th.component';

@Component({
    selector: `tr[tuiThGroup]`,
    templateUrl: `./th-group.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiThGroupComponent<T> implements AfterContentInit {
    @ContentChild(forwardRef(() => TuiThComponent))
    readonly th: unknown;

    @ContentChildren(forwardRef(() => TuiHeadDirective))
    readonly heads: QueryList<TuiHeadDirective<T>> = EMPTY_QUERY;

    heads$: Observable<Record<any, TuiHeadDirective<T>>> | null = null;

    constructor(
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}

    ngAfterContentInit(): void {
        this.heads$ = this.heads.changes.pipe(
            startWith(null),
            map(() =>
                this.heads.reduce<Record<any, TuiHeadDirective<T>>>(
                    (record, item) => ({...record, [item.tuiHead]: item}),
                    {},
                ),
            ),
        );
    }
}
