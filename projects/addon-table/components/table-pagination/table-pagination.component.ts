import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {TUI_TABLE_PAGINATION_TEXTS} from '@taiga-ui/addon-table/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_SPIN_TEXTS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {
    TUI_TABLE_PAGINATION_OPTIONS,
    TuiTablePaginationOptions,
} from './table-pagination-options';
import {TuiPagination} from './pagination.model';

@Component({
    selector: `tui-table-pagination`,
    templateUrl: `./table-pagination.template.html`,
    styleUrls: [`./table-pagination.style.less`],
})
export class TuiTablePaginationComponent {
    @Input()
    @tuiDefaultProp()
    items: readonly number[] = [10, 20, 50, 100];

    @Input()
    @tuiDefaultProp()
    total = 0;

    @Input()
    @tuiDefaultProp()
    page = 0;

    @Input()
    @tuiDefaultProp()
    size = this.items[0];

    @Output()
    readonly pageChange = new EventEmitter<number>();

    @Output()
    readonly sizeChange = new EventEmitter<number>();

    @Output()
    readonly paginationChange = new EventEmitter<TuiPagination>();

    open = false;

    constructor(
        @Inject(TUI_SPIN_TEXTS) readonly spinTexts$: Observable<[string, string]>,
        @Inject(TUI_TABLE_PAGINATION_TEXTS)
        readonly texts$: Observable<Record<'pages' | 'linesPerPage' | 'of', string>>,
        @Inject(TUI_TABLE_PAGINATION_OPTIONS) readonly options: TuiTablePaginationOptions,
    ) {}

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

    get pagination(): TuiPagination {
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
