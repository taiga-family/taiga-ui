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
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRowDirective} from '../directives/row.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTrComponent} from '../tr/tr.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]',
    imports: [
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        TuiMapperPipe,
        PolymorpheusModule,
        TuiIconComponent,
        TuiChevronDirective,
    ],
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTbodyComponent<T extends Partial<Record<keyof T, any>>> {
    private readonly pipe = inject(TuiTableSortPipe<T>);
    private readonly options = inject(TUI_TABLE_OPTIONS);

    @ContentChildren(forwardRef(() => TuiTrComponent))
    public readonly rows: QueryList<TuiTrComponent<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    @Input()
    public heading: PolymorpheusContent;

    @Input()
    public open = this.options.open;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => TuiRowDirective))
    protected readonly row?: TuiRowDirective<T>;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

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
