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
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTrComponent} from '../tr/tr.component';

@Component({
    selector: 'tbody[tuiTbody]',
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTbodyComponent<T> {
    @Input()
    @tuiDefaultProp()
    data: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    heading: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    open = true;

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => TuiRowDirective))
    readonly row?: TuiRowDirective<T>;

    @ContentChildren(forwardRef(() => TuiTrComponent))
    readonly rows: QueryList<TuiTrComponent<T>> = EMPTY_QUERY;

    readonly toContext = ($implicit: T, index: number) => ({$implicit, index});

    constructor(
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}

    get sorted(): readonly T[] {
        return this.sort(this.data, this.table.sorter, this.table.direction);
    }

    onClick() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }

    @tuiPure
    private sort(
        data: readonly T[],
        sorter: TuiComparator<T> | null,
        direction: -1 | 1,
    ): readonly T[] {
        return sorter ? [...data].sort((a, b) => direction * sorter(a, b)) : data;
    }
}
