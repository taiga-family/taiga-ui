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
    items: readonly number[] = this.options.items;

    @Input()
    total = 0;

    @Input()
    page = 0;

    @Input()
    size = this.options.size;

    /**
     * TODO: Remove in 4.0
     * @deprecated use paginationChange
     */
    @Output()
    readonly pageChange = new EventEmitter<number>();

    /**
     * TODO: Remove in 4.0
     * @deprecated use paginationChange
     */
    @Output()
    readonly sizeChange = new EventEmitter<number>();

    @Output()
    readonly paginationChange = new EventEmitter<TuiTablePagination>();

    open = false;

    readonly icons = inject(TUI_SPIN_ICONS);
    readonly spinTexts$ = inject(TUI_SPIN_TEXTS);
    readonly texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
    readonly commonIcons = inject(TUI_COMMON_ICONS);

    get pages(): number {
        return Math.ceil(this.total / this.size);
    }

    get start(): number {
        return this.page * this.size;
    }

    get end(): number {
        return Math.min(this.start + this.size, this.total);
    }

    get leftDisabled(): boolean {
        return !this.start;
    }

    get rightDisabled(): boolean {
        return this.end === this.total;
    }

    get pagination(): TuiTablePagination {
        return {
            page: this.page,
            size: this.size,
        };
    }

    onItem(size: number): void {
        const {start} = this;

        this.size = size;
        this.sizeChange.emit(size);
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }

    back(): void {
        this.page--;
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }

    forth(): void {
        this.page++;
        this.pageChange.emit(this.page);
        this.paginationChange.emit(this.pagination);
    }
}
