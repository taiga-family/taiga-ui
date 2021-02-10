import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Output,
    QueryList,
} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {EMPTY_QUERY, isNumber, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_SIZE, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TuiCellContext, TuiCellDirective} from './cell.directive';
import {TuiHeadDirective} from './head.directive';
import {TUI_TABLE_PROVIDERS} from './table.providers';

@Component({
    selector: 'table[tuiTable]',
    templateUrl: './table.template.html',
    styleUrls: ['./table.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_TABLE_PROVIDERS,
        {
            provide: TUI_TEXTFIELD_SIZE,
            useExisting: forwardRef(() => TuiTableComponent),
        },
    ],
})
export class TuiTableComponent<T extends Record<any, any>> {
    @Input()
    @tuiDefaultProp()
    data: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    columns: ReadonlyArray<keyof T | string> = [];

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    sorter: TuiComparator<T> | null = null;

    @Input()
    @tuiDefaultProp()
    direction: -1 | 1 = 1;

    @Output()
    readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    @ContentChildren(forwardRef(() => TuiCellDirective))
    readonly cells: QueryList<TuiCellDirective<T, keyof T>> = EMPTY_QUERY;

    @ContentChildren(forwardRef(() => TuiHeadDirective))
    readonly heads: QueryList<TuiHeadDirective<T, keyof T>> = EMPTY_QUERY;

    readonly toContext = (value: T[keyof T], item: T) => new TuiCellContext(value, item);

    constructor(
        @Inject(IntersectionObserverService)
        readonly entries$: Observable<IntersectionObserverEntry[]>,
    ) {}

    get sortedKey(): keyof T | null {
        const head = this.heads.find(
            ({tuiHeadSorter}) => !!tuiHeadSorter && tuiHeadSorter === this.sorter,
        );

        return head ? head.tuiHead : null;
    }

    get sorted(): readonly T[] {
        return this.sort(this.data, this.sorter, this.direction);
    }

    updateSorter(sorter: TuiComparator<T>) {
        if (this.sorter === sorter) {
            this.direction = this.direction === 1 ? -1 : 1;
            this.directionChange.emit(this.direction);

            return;
        }

        this.sorter = sorter;
        this.sorterChange.emit(this.sorter);
        this.direction = 1;
        this.directionChange.emit(1);
    }

    isNumber(value: unknown): value is number {
        return isNumber(value);
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
