import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    inject,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map, startWith} from 'rxjs';

import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiThComponent} from '../th/th.component';

@Component({
    standalone: true,
    selector: 'tr[tuiThGroup]',
    imports: [NgIf, NgForOf, NgTemplateOutlet, TuiThComponent, AsyncPipe],
    templateUrl: './th-group.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TUI_TABLE_PROVIDER],
})
export class TuiThGroupComponent<T extends Partial<Record<keyof T, any>>>
    implements AfterContentInit
{
    @ContentChild(forwardRef(() => TuiThComponent))
    protected readonly th!: TuiThComponent<T>;

    @ContentChildren(forwardRef(() => TuiHeadDirective))
    protected readonly heads: QueryList<TuiHeadDirective<T>> = EMPTY_QUERY;

    protected heads$: Observable<Record<any, TuiHeadDirective<T>>> | null = null;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    public ngAfterContentInit(): void {
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
