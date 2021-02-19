import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {defaultSort} from '@taiga-ui/addon-table/utils';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_WATCHED_TABLE_PROVIDER} from '../providers/common.providers';

@Component({
    selector: 'th[tuiTh]',
    templateUrl: './th.template.html',
    styleUrls: ['./th.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_WATCHED_TABLE_PROVIDER,
})
export class TuiThComponent<T> {
    @Input()
    @tuiDefaultProp()
    sorter: TuiComparator<T> | null = (a, b) => defaultSort(a[this.key], b[this.key]);

    @Input()
    @HostBinding('class._sticky')
    @tuiDefaultProp()
    sticky = false;

    constructor(
        @Optional() @Inject(TuiHeadDirective) readonly head: TuiHeadDirective<T> | null,
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}

    get key(): keyof T {
        if (!this.head) {
            throw new Error('Trying to sort with no key');
        }

        return this.head.tuiHead;
    }

    get isCurrent(): boolean {
        return !!this.sorter && this.sorter === this.table.sorter;
    }
}
