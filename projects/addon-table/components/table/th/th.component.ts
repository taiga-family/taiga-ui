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
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDefaultSort} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';

import {TuiTableHead} from '../directives/head.directive';
import {TuiTableResized} from '../directives/resized.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_OPTIONS, TuiSortDirection} from '../table.options';

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
    },
})
export class TuiTableTh<T extends Partial<Record<keyof T, any>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly el = tuiInjectElement();

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
            return this.table?.direction === TuiSortDirection.Asc
                ? this.options.sortIcons.asc
                : this.options.sortIcons.desc;
        }

        return this.options.sortIcons.off;
    }

    protected updateSorterAndDirection(): void {
        const sorter = this.requiredSort ? this.sorter : null;

        this.table?.updateSorterAndDirection(
            this.isCurrentAndDescDirection ? sorter : this.sorter,
        );
    }

    protected onResized(width: number): void {
        const minWidth = this.getStyleValue('min-width');
        const maxWidth = this.getStyleValue('max-width');

        // Apply clamp logic to respect min/max constraints
        let clampedWidth = width;

        if (minWidth !== null && clampedWidth < minWidth) {
            clampedWidth = minWidth;
        }

        if (maxWidth !== null && clampedWidth > maxWidth) {
            clampedWidth = maxWidth;
        }

        this.width = clampedWidth;
    }

    private get isCurrentAndDescDirection(): boolean {
        return (
            this.sorter === this.table?.sorter &&
            this.table?.direction === TuiSortDirection.Desc
        );
    }

    private getStyleValue(property: 'max-width' | 'min-width'): number | null {
        // First try to get from inline styles
        const inlineValue = this.el.style.getPropertyValue(property);

        if (inlineValue) {
            const parsed = this.parsePixelValue(inlineValue);

            if (parsed !== null) {
                return parsed;
            }
        }

        // Fall back to computed styles
        const computedStyle = getComputedStyle(this.el);
        const computedValue =
            property === 'min-width' ? computedStyle.minWidth : computedStyle.maxWidth;

        return this.parsePixelValue(computedValue);
    }

    private parsePixelValue(value: string): number | null {
        // Handle 'none', 'auto', or other non-pixel values
        if (!value || value === 'none' || value === 'auto' || value === '0px') {
            return null;
        }

        // Parse pixel values (e.g., "100px" -> 100)
        const matches = /^(\d+(?:\.\d+)?)px$/.exec(value);

        return matches?.[1] ? parseFloat(matches[1]) : null;
    }
}

export class TuiTableSortKeyException extends Error {
    constructor() {
        super(ngDevMode ? 'Trying to sort with no key' : '');
    }
}
