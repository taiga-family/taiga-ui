import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
} from '@angular/core';
import {EMPTY_QUERY, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTableRow} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTr} from '../tr/tr.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]',
    imports: [
        NgForOf,
        NgTemplateOutlet,
        NgIf,
        TuiIcon,
        PolymorpheusOutlet,
        TuiChevronDirective,
        TuiMapperPipe,
    ],
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTableTbody<T extends Partial<Record<keyof T, any>>> {
    private readonly pipe = inject(TuiTableSortPipe<T>);
    private readonly options = inject(TUI_TABLE_OPTIONS);

    @ContentChild(forwardRef(() => TuiTableRow))
    protected readonly row?: TuiTableRow<T>;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    @Input()
    public heading: PolymorpheusContent;

    @Input()
    public open = this.options.open;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    public get sorted(): readonly T[] {
        return this.pipe.transform(this.data);
    }

    protected readonly toContext = (
        $implicit: T,
        index: number,
    ): {$implicit: T; index: number} => ({$implicit, index});

    protected onClick(): void {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}
