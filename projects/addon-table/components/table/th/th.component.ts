import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultSort} from '@taiga-ui/addon-table/utils';
import {tuiDefaultProp, TuiTableSortKeyException} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';

import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';

@Component({
    selector: `th[tuiTh]`,
    templateUrl: `./th.template.html`,
    styleUrls: [`./th.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_ELEMENT_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiThComponent<T extends Record<keyof T, any>> {
    @Input()
    @tuiDefaultProp()
    sorter: TuiComparator<T> | null = this.head
        ? (a, b) => tuiDefaultSort(a[this.key], b[this.key])
        : null;

    @Input()
    @tuiDefaultProp()
    resizable = false;

    @Input()
    @HostBinding(`class._sticky`)
    @tuiDefaultProp()
    sticky = false;

    @HostBinding(`style.width.px`)
    width: number | null = null;

    constructor(
        @Optional()
        @Inject(TuiHeadDirective)
        private readonly head: TuiHeadDirective<T> | null,
        @Optional()
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T> | null,
    ) {}

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
        return this.isCurrent ? `tuiIconSortDown` : `tuiIconSortOff`;
    }

    onResized(width: number): void {
        this.width = width;
    }
}
