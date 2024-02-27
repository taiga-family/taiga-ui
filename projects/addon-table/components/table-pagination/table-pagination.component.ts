import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_PAGINATION_TEXTS} from '@taiga-ui/addon-table/tokens';
import {TUI_COMMON_ICONS, TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core';

import {TUI_TABLE_PAGINATION_OPTIONS} from './table-pagination.options';

export interface TuiTablePagination {
    readonly page: number;
    readonly size: number;
}

@Component({
    selector: 'tui-table-pagination',
    templateUrl: './table-pagination.template.html',
    styleUrls: ['./table-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTablePaginationComponent {
    protected readonly options = inject(TUI_TABLE_PAGINATION_OPTIONS);

    @Input()
    public items: readonly number[] = this.options.items;

    @Input()
    public total = 0;

    @Input()
    public page = 0;

    @Input()
    public size = this.options.size;

    /**
     * TODO: Remove in 4.0
     * @deprecated use paginationChange
     */
    @Output()
    public readonly pageChange = new EventEmitter<number>();

    /**
     * TODO: Remove in 4.0
     * @deprecated use paginationChange
     */
    @Output()
    public readonly sizeChange = new EventEmitter<number>();

    @Output()
    public readonly paginationChange = new EventEmitter<TuiTablePagination>();

    protected open = false;

    protected readonly icons = inject(TUI_SPIN_ICONS);
    protected readonly spinTexts$ = inject(TUI_SPIN_TEXTS);
    protected readonly texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
    protected readonly commonIcons = inject(TUI_COMMON_ICONS);

    protected get pages(): number {
        return Math.ceil(this.total / this.size);
    }

    protected get start(): number {
        return this.page * this.size;
    }

    protected get end(): number {
        return Math.min(this.start + this.size, this.total);
    }

    protected get leftDisabled(): boolean {
        return !this.start;
    }

    protected get rightDisabled(): boolean {
        return this.end === this.total;
    }

    protected get pagination(): TuiTablePagination {
        return {
            page: this.page,
            size: this.size,
        };
    }

    protected onItem(size: number): void {
        const {start} = this;

        this.size = size;
        this.sizeChange.emit(size);
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }

    protected back(): void {
        this.page--;
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }

    protected forth(): void {
        this.page++;
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }
}
