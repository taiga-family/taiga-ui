import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY, tuiDefaultProp} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTrComponent} from '../tr/tr.component';

@Component({
    selector: `tbody[tuiTbody]`,
    templateUrl: `./tbody.template.html`,
    styleUrls: [`./tbody.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTbodyComponent<T extends Record<keyof T, any>> {
    @Input()
    @tuiDefaultProp()
    data: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    heading: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    open = true;

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => TuiRowDirective))
    readonly row?: TuiRowDirective<T>;

    @ContentChildren(forwardRef(() => TuiTrComponent))
    readonly rows: QueryList<TuiTrComponent<T>> = EMPTY_QUERY;

    constructor(
        @Inject(TuiTableSortPipe) private readonly pipe: TuiTableSortPipe<T>,
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}

    get sorted(): readonly T[] {
        return this.pipe.transform(this.data);
    }

    readonly toContext = (
        $implicit: T,
        index: number,
    ): {$implicit: T; index: number} => ({$implicit, index});

    onClick(): void {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}
