import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import {TUI_TABLE_PAGINATION_TEXTS} from '@taiga-ui/addon-table/tokens';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TUI_COMMON_ICONS, TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {
    TUI_TABLE_PAGINATION_OPTIONS,
    type TuiTablePaginationOptions,
} from './table-pagination.options';

export interface TuiTablePaginationEvent {
    readonly page: number;
    readonly size: number;
}

@Component({
    selector: 'tui-table-pagination',
    imports: [PolymorpheusOutlet, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiLink],
    templateUrl: './table-pagination.template.html',
    styleUrl: './table-pagination.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTablePagination {
    private readonly options = inject(TUI_TABLE_PAGINATION_OPTIONS);

    protected readonly icons = inject(TUI_SPIN_ICONS);
    protected readonly spinTexts = inject(TUI_SPIN_TEXTS);
    protected readonly texts = inject(TUI_TABLE_PAGINATION_TEXTS);
    protected readonly commonIcons = inject(TUI_COMMON_ICONS);

    protected readonly pages = computed(() => Math.ceil(this.total() / this.size()));

    protected readonly end = computed(() =>
        Math.min(this.start + this.size(), this.total()),
    );

    protected readonly rightDisabled = computed(() => this.end() === this.total());

    protected readonly pagination = computed<TuiTablePaginationEvent>(() => {
        return {
            page: this.page(),
            size: this.size(),
        };
    });

    public readonly items = input<readonly number[]>(this.options.items);

    public readonly total = input(0);

    public readonly page = input(0);

    public readonly size = input(this.options.size);

    public readonly paginationChange = output<TuiTablePaginationEvent>();

    public onItem(size: number): void {
        const {start} = this;

        tuiSetSignal(this.size, size);
        tuiSetSignal(this.page, Math.floor(start / this.size()));
        this.paginationChange.emit(this.pagination());
    }

    protected get showPages(): boolean {
        return this.options.showPages;
    }

    protected get sizeOptionContent(): TuiTablePaginationOptions['sizeOptionContent'] {
        return this.options.sizeOptionContent;
    }

    protected get start(): number {
        return (
            Math.min(this.page(), Math.floor(this.total() / this.size())) * this.size()
        );
    }

    protected get leftDisabled(): boolean {
        return !this.start;
    }

    protected back(): void {
        tuiSetSignal(this.page, this.page() - 1);
        this.paginationChange.emit(this.pagination());
    }

    protected forth(): void {
        tuiSetSignal(this.page, this.page() + 1);
        this.paginationChange.emit(this.pagination());
    }
}
