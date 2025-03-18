import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_PAGINATION_TEXTS} from '@taiga-ui/addon-table/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiDropdownDirective, TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {TUI_COMMON_ICONS, TUI_SPIN_ICONS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import type {TuiTablePaginationOptions} from './table-pagination.options';
import {TUI_TABLE_PAGINATION_OPTIONS} from './table-pagination.options';

export interface TuiTablePaginationEvent {
    readonly page: number;
    readonly size: number;
}

@Component({
    standalone: true,
    selector: 'tui-table-pagination',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        TuiDataList,
        TuiDropdownDirective,
        TuiDropdownOpen,
        TuiIcon,
        TuiLink,
    ],
    templateUrl: './table-pagination.template.html',
    styleUrls: ['./table-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTablePagination {
    private readonly options = inject(TUI_TABLE_PAGINATION_OPTIONS);

    protected open = false;
    protected readonly icons = inject(TUI_SPIN_ICONS);
    protected readonly spinTexts$ = inject(TUI_SPIN_TEXTS);
    protected readonly texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
    protected readonly commonIcons = inject(TUI_COMMON_ICONS);

    @Input()
    public items: readonly number[] = this.options.items;

    @Input()
    public total = 0;

    @Input()
    public page = 0;

    @Input()
    public size = this.options.size;

    @Output()
    public readonly paginationChange = new EventEmitter<TuiTablePaginationEvent>();

    public onItem(size: number): void {
        const {start} = this;

        this.size = size;
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.paginationChange.emit(this.pagination);
    }

    protected get pages(): number {
        return Math.ceil(this.total / this.size);
    }

    protected get showPages(): boolean {
        return this.options.showPages;
    }

    protected get sizeOptionContent(): TuiTablePaginationOptions['sizeOptionContent'] {
        return this.options.sizeOptionContent;
    }

    protected get start(): number {
        return Math.min(this.page, Math.floor(this.total / this.size)) * this.size;
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

    protected get pagination(): TuiTablePaginationEvent {
        return {
            page: this.page,
            size: this.size,
        };
    }

    protected back(): void {
        this.page--;
        this.paginationChange.emit(this.pagination);
    }

    protected forth(): void {
        this.page++;
        this.paginationChange.emit(this.pagination);
    }
}
