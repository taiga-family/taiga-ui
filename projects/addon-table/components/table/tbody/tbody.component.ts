import {NgIf} from '@angular/common';
import type {AfterViewInit, OnChanges, QueryList, SimpleChanges} from '@angular/core';
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
    signal,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableExpandContent} from '../directives/table-expand-content.directive';
import {TuiTableExpandHeading} from '../directives/table-expand-heading.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTr} from '../tr/tr.component';
import {ExpandableTableRowFillerComponent} from './expandable-table-row-filler/expandable-table-row-filler.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]',
    imports: [
        ExpandableTableRowFillerComponent,
        NgIf,
        PolymorpheusOutlet,
        TuiChevron,
        TuiIcon,
    ],
    templateUrl: './tbody.template.html',
    styleUrls: ['./tbody.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABLE_PROVIDER,
})
export class TuiTableTbody<T extends Partial<Record<keyof T, any>>>
    implements OnChanges, AfterViewInit
{
    private readonly options = inject(TUI_TABLE_OPTIONS);

    @ContentChild(forwardRef(() => TuiTableExpandContent))
    protected readonly customExpandContent: TuiTableExpandContent | null = null;

    @ContentChild(forwardRef(() => TuiTableExpandHeading))
    protected readonly expandHeading: TuiTableExpandHeading | null = null;

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    protected readonly showExpandableContent = signal(this.options.open);
    protected readonly showRowsFiller = signal(false);
    protected readonly openSignal = signal(this.options.open);

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    /** @deprecated: drop in v5.0, use TuiExpandableHeading */
    @Input()
    public heading: PolymorpheusContent;

    @Input()
    public open = this.options.open;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    public ngOnChanges(changes: SimpleChanges): void {
        if ('open' in changes) {
            this.openSignal.set(changes.open.currentValue);
        }

        if ('open' in changes && changes.open.firstChange) {
            this.showExpandableContent.set(changes.open.currentValue);
        }
    }

    public ngAfterViewInit(): void {
        this.showRowsFiller.set(Boolean(this.expandHeading) && !this.customExpandContent);
    }

    public onClick = (): void => {
        this.open = !this.open;
        this.openSignal.set(this.open);
        this.openChange.emit(this.open);
    };

    protected onExpandAnimationDone(): void {
        if (this.open) {
            this.showExpandableContent.set(true);
        }
    }

    protected onExpandAnimationStart(): void {
        if (!this.open) {
            this.showExpandableContent.set(false);
        }
    }
}
