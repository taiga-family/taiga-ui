import {NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTableDirective} from '../directives/table.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTr} from '../tr/tr.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]',
    imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon],
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTableTbody<T extends Partial<Record<keyof T, any>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    @Input()
    public heading: PolymorpheusContent;

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    @Input()
    public open = this.options.open;

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    /** @deprecated: drop in v5.0, use TuiTableExpand */
    protected onClick = (): void => {
        this.open = !this.open;
        this.openChange.emit(this.open);
    };
}
