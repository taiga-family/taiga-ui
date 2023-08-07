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
import {TUI_TABLE_OPTIONS, TuiTableOptions} from '@taiga-ui/addon-table/components';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {TUI_ARROW_OPTIONS, TuiArrowOptions} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TuiTrComponent} from '../tr/tr.component';

@Component({
    selector: 'tbody[tuiTbody]',
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTbodyComponent<T extends Partial<Record<keyof T, any>>> {
    @Input()
    data: readonly T[] = [];

    @Input()
    heading: PolymorpheusContent;

    @Input()
    open = this.options.open;

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => TuiRowDirective))
    readonly row?: TuiRowDirective<T>;

    @ContentChildren(forwardRef(() => TuiTrComponent))
    readonly rows: QueryList<TuiTrComponent<T>> = EMPTY_QUERY;

    constructor(
        @Inject(TuiTableSortPipe) private readonly pipe: TuiTableSortPipe<T>,
        @Inject(TUI_TABLE_OPTIONS) private readonly options: TuiTableOptions,
        @Inject(TUI_ARROW_OPTIONS) readonly arrowOptions: TuiArrowOptions,
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
