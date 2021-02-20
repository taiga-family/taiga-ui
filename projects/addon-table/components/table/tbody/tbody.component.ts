import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';

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

    readonly toContext = ($implicit: T) => ({$implicit});

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
