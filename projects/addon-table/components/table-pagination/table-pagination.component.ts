import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_PAGINATION_TEXTS} from '@taiga-ui/addon-table/tokens';
import {TUI_COMMON_ICONS, TUI_PAGINATION_ICONS} from '@taiga-ui/core';

import type {TuiTablePaginationOptions} from './table-pagination.options';
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
    private readonly options = inject(TUI_TABLE_PAGINATION_OPTIONS);

    @Input()
    public items: readonly number[] = this.options.items;

    @Input()
    public total = 0;

    @Input()
    public page = 0;

    @Input()
    public size = this.options.size;

    @Input()
    public showFirstLastPageButtons = false;

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

    protected readonly commonIcons = inject(TUI_COMMON_ICONS);
    protected readonly paginationIcons = inject(TUI_PAGINATION_ICONS);
    protected readonly texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);

    public onItem(size: number): void {
        const {start} = this;

        this.size = size;
        this.sizeChange.emit(size);
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }

    /**
     * @deprecated Use `pageCount` instead.
     */
    protected get pages(): number {
        return this.pageCount;
    }

    protected get pageCount(): number {
        return Math.ceil(this.total / this.size);
    }

    protected get showPages(): boolean {
        return this.options.showPages;
    }

    protected get sizeOptionContent(): TuiTablePaginationOptions['sizeOptionContent'] {
        return this.options.sizeOptionContent;
    }

    protected get start(): number {
        return this.page * this.size;
    }

    protected get end(): number {
        return Math.min(this.start + this.size, this.total);
    }

    /**
     * @deprecated Use `previousPageDisabled` instead.
     */
    protected get leftDisabled(): boolean {
        return this.previousPageDisabled;
    }

    /**
     * @deprecated Use `nextPageDisabled` instead.
     */
    protected get rightDisabled(): boolean {
        return this.nextPageDisabled;
    }

    protected get firstPageDisabled(): boolean {
        return this.previousPage === null;
    }

    protected get previousPageDisabled(): boolean {
        return this.previousPage === null;
    }

    protected get nextPageDisabled(): boolean {
        return this.nextPage === null;
    }

    protected get lastPageDisabled(): boolean {
        return this.nextPage === null;
    }

    protected get pagination(): TuiTablePagination {
        return {
            page: this.page,
            size: this.size,
        };
    }

    /**
     * @deprecated Use `selectPreviousPage()` instead.
     */
    protected back(): void {
        this.selectPreviousPage();
    }

    /**
     * @deprecated Use `selectNextPage()` instead.
     */
    protected forth(): void {
        this.selectNextPage();
    }

    protected selectFirstPage(): void {
        this.selectPage(this.firstPage);
    }

    protected selectPreviousPage(): void {
        const previousPage = this.previousPage;

        if (previousPage === null) {
            return;
        }

        this.selectPage(previousPage);
    }

    protected selectNextPage(): void {
        const nextPage = this.nextPage;

        if (nextPage === null) {
            return;
        }

        this.selectPage(nextPage);
    }

    protected selectLastPage(): void {
        this.selectPage(this.lastPage);
    }

    /**
     * Returns the index of the first page.
     */
    private get firstPage(): number {
        return 0;
    }

    /**
     * Returns the index of the last page.
     */
    private get lastPage(): number {
        return this.pageCount - 1;
    }

    /**
     * Returns the index of the previous page, or `null` if the current page is the first one.
     */
    private get previousPage(): number | null {
        return this.page !== this.firstPage ? this.page - 1 : null;
    }

    /**
     * Returns the index of the next page, or `null` if the current page is the last one.
     */
    private get nextPage(): number | null {
        return this.page !== this.lastPage ? this.page + 1 : null;
    }

    private selectPage(page: number): void {
        if (this.page === page) {
            return;
        }

        this.page = page;
        this.pageChange.emit(page);
        this.paginationChange.emit(this.pagination);
    }
}
