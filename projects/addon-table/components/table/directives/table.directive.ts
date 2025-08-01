import type {AfterViewInit, OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {WA_INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiProvide, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiTextfieldOptions} from '@taiga-ui/core/components/textfield';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiChipOptionsProvider} from '@taiga-ui/kit/components/chip';
import {tuiProgressOptionsProvider} from '@taiga-ui/kit/components/progress';
import type {Observable} from 'rxjs';
import {combineLatest, debounceTime, map, Subject} from 'rxjs';

import type {TuiTableSortChange} from '../table.options';
import {TUI_TABLE_OPTIONS, TuiSortDirection} from '../table.options';
import {TuiStuck} from './stuck.directive';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./table.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-table',
    },
})
class TuiTableStyles {}

@Directive({
    standalone: true,
    selector: 'table[tuiTable]',
    providers: [
        {
            provide: WA_INTERSECTION_ROOT_MARGIN,
            useValue: '10000px 10000px 10000px 0px',
        },
        tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
        tuiButtonOptionsProvider({size: 's'}),
        tuiBadgeOptionsProvider({size: 'm', appearance: 'neutral'}),
        tuiChipOptionsProvider({size: 'xxs', appearance: 'neutral'}),
        tuiProgressOptionsProvider({size: 's', color: 'var(--tui-text-action)'}),
    ],
    hostDirectives: [TuiStuck],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiTableDirective<T extends Partial<Record<keyof T, any>>>
    implements AfterViewInit, TuiTextfieldOptions, OnChanges
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly cdr = inject(ChangeDetectorRef);

    protected readonly nothing = tuiWithStyles(TuiTableStyles);

    @Input()
    public columns: ReadonlyArray<string | keyof T> = [];

    @Input()
    public direction = this.options.direction;

    /**
     * @deprecated: use sortChange
     */
    @Output()
    public readonly directionChange = new EventEmitter<TuiSortDirection>();

    /**
     * @deprecated: use sortChange
     */
    @Output()
    public readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    @Output()
    public readonly sortChange: Observable<TuiTableSortChange<T>> = combineLatest([
        this.sorterChange,
        this.directionChange,
    ]).pipe(
        debounceTime(0),
        map(([sortComparator, sortDirection]) => ({
            sortBy: sortComparator,
            orderBy: sortDirection,
            sortComparator,
            sortDirection,
        })),
    );

    public readonly appearance = signal('table');
    public readonly size = signal(this.options.size);
    public readonly cleaner = signal(false);

    // TODO: refactor to signal inputs after Angular update
    public readonly change$ = new Subject<void>();

    @Input('size')
    public set sizeSetter(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    @Input()
    public sorter: TuiComparator<T> = () => 0;

    public updateSorterAndDirection(sorter: TuiComparator<T> | null): void {
        if (this.sorter === sorter) {
            this.updateSorter(
                this.sorter,
                this.direction === TuiSortDirection.Asc
                    ? TuiSortDirection.Desc
                    : TuiSortDirection.Asc,
            );
        } else {
            this.updateSorter(sorter);
        }
    }

    public ngOnChanges(): void {
        this.change$.next();
    }

    public ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    public updateSorter(
        sorter: TuiComparator<T> | null,
        direction: TuiSortDirection = TuiSortDirection.Asc,
    ): void {
        this.sorter = sorter || this.sorter;
        this.direction = direction;
        this.sorterChange.emit(sorter);
        this.directionChange.emit(this.direction);
        this.change$.next();
    }
}
