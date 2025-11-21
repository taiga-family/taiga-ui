import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    effect,
    inject,
    input,
    model,
    output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {WA_INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    type TuiTextfieldOptions,
} from '@taiga-ui/core/components/textfield';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiChipOptionsProvider} from '@taiga-ui/kit/components/chip';
import {tuiProgressOptionsProvider} from '@taiga-ui/kit/components/progress';

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
        tuiTable: '',
        '[attr.data-size]': 'size()',
    },
})
export class TuiTableDirective<T extends Partial<Record<keyof T, unknown>>>
    implements TuiTextfieldOptions
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly computedSortChange = computed<TuiTableSortChange<T>>(() => ({
        sortComparator: this.sorter(),
        sortDirection: this.direction(),
    }));

    protected readonly sortChangeOutput = effect(() =>
        this.sortChange.emit(this.computedSortChange()),
    );

    public readonly columns = input<ReadonlyArray<string | keyof T>>([]);
    public readonly size = input<TuiSizeL | TuiSizeS>(this.options.size);
    public readonly direction = model(this.options.direction);
    public readonly sorter = model<TuiComparator<T>>(EMPTY_COMPARATOR);
    public readonly sortChange = output<TuiTableSortChange<T>>();

    public readonly appearance = signal('table');
    public readonly cleaner = signal(false);

    public updateSorterAndDirection(sorter: TuiComparator<T> | null): void {
        if (this.sorter() === sorter) {
            this.updateSorter(
                this.sorter(),
                this.direction() === TuiSortDirection.Asc
                    ? TuiSortDirection.Desc
                    : TuiSortDirection.Asc,
            );
        } else {
            this.updateSorter(sorter);
        }
    }

    public updateSorter(
        sorter: TuiComparator<T> | null,
        direction: TuiSortDirection = TuiSortDirection.Asc,
    ): void {
        this.sorter.set(sorter || EMPTY_COMPARATOR.bind({}));
        this.direction.set(direction);
    }
}
