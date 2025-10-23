import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    inject,
    Input,
    input,
    type OnChanges,
    output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {outputFromObservable, outputToObservable} from '@angular/core/rxjs-interop';
import {WA_INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiProvide, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    type TuiTextfieldOptions,
} from '@taiga-ui/core/components/textfield';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiChipOptionsProvider} from '@taiga-ui/kit/components/chip';
import {tuiProgressOptionsProvider} from '@taiga-ui/kit/components/progress';
import {combineLatest, debounceTime, map, type Observable, Subject} from 'rxjs';

import {
    TUI_TABLE_OPTIONS,
    TuiSortDirection,
    type TuiTableSortChange,
} from '../table.options';
import {TuiStuck} from './stuck.directive';

const EMPTY_COMPARATOR: TuiComparator<unknown> = () => 0;

@Component({
    template: '',
    styleUrl: './table.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-table'},
})
class Styles {}

@Directive({
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
export class TuiTableDirective<T extends Partial<Record<keyof T, unknown>>>
    implements AfterViewInit, TuiTextfieldOptions, OnChanges
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly cdr = inject(ChangeDetectorRef);

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly columns = input<ReadonlyArray<string | keyof T>>([]);

    @Input()
    public direction = this.options.direction;

    @Input()
    public sorter: TuiComparator<T> = EMPTY_COMPARATOR;

    /**
     * @deprecated: use sortChange
     */
    public readonly directionChange = output<TuiSortDirection>();

    /**
     * @deprecated: use sortChange
     */
    public readonly directionChange$ = outputToObservable(this.directionChange);

    /**
     * @deprecated: use sortChange
     */
    public readonly sorterChange = output<TuiComparator<T> | null>();

    public readonly sorterChange$ = outputToObservable(this.sorterChange);

    protected readonly sortChange$: Observable<TuiTableSortChange<T>> = combineLatest([
        this.sorterChange$,
        this.directionChange$,
    ]).pipe(
        debounceTime(0),
        map(([sortComparator, sortDirection]) => ({
            sortBy: sortComparator,
            orderBy: sortDirection,
            sortComparator,
            sortDirection,
        })),
    );

    public readonly sortChange = outputFromObservable(this.sortChange$);

    public readonly appearance = signal('table');
    public readonly size = input<TuiSizeL | TuiSizeS>(this.options.size);
    public readonly cleaner = signal(false);

    // TODO: refactor to signal inputs after Angular update
    public readonly change$ = new Subject<void>();

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
        this.sorter = sorter || EMPTY_COMPARATOR.bind({});
        this.direction = direction;
        this.sorterChange.emit(sorter);
        this.directionChange.emit(this.direction);
        this.change$.next();
    }
}
