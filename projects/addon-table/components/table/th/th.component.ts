/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    Input,
} from '@angular/core';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultSort} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';

import {TuiTableHead} from '../directives/head.directive';
import {TuiTableResized} from '../directives/resized.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_OPTIONS} from '../table.options';

@Component({
    standalone: true,
    selector: 'th[tuiTh]',
    imports: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized],
    templateUrl: './th.template.html',
    styleUrls: ['./th.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.width.px]': 'width',
        '[class._sticky]': 'sticky',
        '[attr.requiredSort]': 'requiredSort',
    },
})
export class TuiTableTh<T extends Partial<Record<keyof T, any>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    private readonly head = inject<TuiTableHead<T>>(TuiTableHead, {
        optional: true,
    });

    protected width: number | null = null;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
        {optional: true},
    );

    @Input()
    public sorter: TuiComparator<T> | null = this.head
        ? (a, b) => tuiDefaultSort(a[this.key], b[this.key])
        : null;

    @Input()
    public resizable = this.options.resizable;

    @Input()
    public sticky = this.options.sticky;

    @Input()
    public requiredSort = this.options.requiredSort;

    public get key(): keyof T {
        if (!this.head) {
            throw new TuiTableSortKeyException();
        }

        return this.head.tuiHead as keyof T;
    }

    protected get isCurrent(): boolean {
        return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
    }

    protected get icon(): string {
        if (this.isCurrent) {
            return this.table?.direction === 1
                ? this.options.sortIcons.desc
                : this.options.sortIcons.asc;
        }

        return this.options.sortIcons.off;
    }

    protected updateSorterAndDirection(): void {
        const sorter = this.requiredSort ? this.sorter : null;

        this.table?.updateSorterAndDirection(
            this.isCurrentAndAscDirection ? sorter : this.sorter,
        );
    }

    protected onResized(width: number): void {
        this.width = width;
    }

    private get isCurrentAndAscDirection(): boolean {
        return this.sorter === this.table?.sorter && this.table?.direction === -1;
    }
}

export class TuiTableSortKeyException extends Error {
    constructor() {
        super(ngDevMode ? 'Trying to sort with no key' : '');
    }
}
