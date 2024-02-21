import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTrComponent} from '../tr/tr.component';

@Component({
    selector: 'tbody[tuiTbody]',
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTbodyComponent<T extends Partial<Record<keyof T, any>>> {
    private readonly pipe = inject(TuiTableSortPipe<T>);
    private readonly options = inject(TUI_TABLE_OPTIONS);

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

    readonly arrowOptions = inject(TUI_ARROW_OPTIONS);
    readonly table = inject<TuiTableDirective<T>>(forwardRef(() => TuiTableDirective));

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
