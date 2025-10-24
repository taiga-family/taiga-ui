/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    Input,
    input,
} from '@angular/core';
import {type TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultSort} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';

import {TuiTableHead} from '../directives/head.directive';
import {TuiTableResized} from '../directives/resized.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_OPTIONS, TuiSortDirection} from '../table.options';

@Component({
    selector: 'th[tuiTh]',
    imports: [AsyncPipe, NgTemplateOutlet, TuiIcon, TuiTableResized],
    templateUrl: './th.template.html',
    styleUrl: './th.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.min-width.px]': 'width || minWidth()',
        '[style.width.px]': 'width || minWidth()',
        '[style.max-width.px]': 'width || maxWidth()',
        '[class._sticky]': 'sticky()',
    },
})
export class TuiTableTh<T extends Partial<Record<keyof T, unknown>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    private readonly head = inject<TuiTableHead<T>>(TuiTableHead, {
        optional: true,
    });

    protected width: number | null = null;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
        {optional: true},
    );

    public readonly minWidth = input(-Infinity);

    public readonly maxWidth = input(Infinity);

    @Input()
    public sorter: TuiComparator<T> | null = this.head
        ? (a, b) => tuiDefaultSort(a[this.key], b[this.key])
        : null;

    public readonly resizable = input(this.options.resizable);

    public readonly sticky = input(this.options.sticky);

    public readonly requiredSort = input(this.options.requiredSort);

    public get key(): keyof T {
        if (!this.head) {
            throw new TuiTableSortKeyException();
        }

        return this.head.tuiHead() as keyof T;
    }

    protected get isCurrent(): boolean {
        return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
    }

    protected get icon(): string {
        if (this.isCurrent) {
            return this.table?.direction() === TuiSortDirection.Asc
                ? this.options.sortIcons.asc
                : this.options.sortIcons.desc;
        }

        return this.options.sortIcons.off;
    }

    protected updateSorterAndDirection(): void {
        const sorter = this.requiredSort() ? this.sorter : null;

        this.table?.updateSorterAndDirection(
            this.isCurrentAndDescDirection ? sorter : this.sorter,
        );
    }

    protected onResized(width: number): void {
        this.width = Math.min(Math.max(width, this.minWidth()), this.maxWidth());
    }

    private get isCurrentAndDescDirection(): boolean {
        return (
            this.sorter === this.table?.sorter &&
            this.table?.direction() === TuiSortDirection.Desc
        );
    }
}

export class TuiTableSortKeyException extends Error {
    constructor() {
        super(ngDevMode ? 'Trying to sort with no key' : '');
    }
}
