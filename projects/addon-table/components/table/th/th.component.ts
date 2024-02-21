import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultSort, TuiTableSortKeyException} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';

import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_OPTIONS} from '../table.options';

@Component({
    selector: 'th[tuiTh]',
    templateUrl: './th.template.html',
    styleUrls: ['./th.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_ELEMENT_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiThComponent<T extends Partial<Record<keyof T, any>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    private readonly head = inject<TuiHeadDirective<T>>(TuiHeadDirective, {
        optional: true,
    });

    @Input()
    sorter: TuiComparator<T> | null = this.head
        ? (a, b) => tuiDefaultSort(a[this.key], b[this.key])
        : null;

    @Input()
    resizable = this.options.resizable;

    @Input()
    @HostBinding('class._sticky')
    sticky = this.options.sticky;

    @HostBinding('style.width.px')
    width: number | null = null;

    readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
        {optional: true},
    );

    get key(): keyof T {
        if (!this.head) {
            throw new TuiTableSortKeyException();
        }

        return this.head.tuiHead;
    }

    get isCurrent(): boolean {
        return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
    }

    get icon(): string {
        if (this.isCurrent) {
            return this.table?.direction === 1
                ? this.options.sortIcons.desc
                : this.options.sortIcons.asc;
        }

        return this.options.sortIcons.off;
    }

    updateSorterAndDirection(): void {
        this.table?.updateSorterAndDirection(
            this.isCurrentAndAscDirection ? null : this.sorter,
        );
    }

    onResized(width: number): void {
        this.width = width;
    }

    private get isCurrentAndAscDirection(): boolean {
        return this.sorter === this.table?.sorter && this.table?.direction === -1;
    }
}
