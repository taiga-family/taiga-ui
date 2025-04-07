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

import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableExpandContent} from '../directives/table-expand-content.directive';
import {TuiTableExpandHeading} from '../directives/table-expand-heading.directive';
import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTbody} from '../tbody/tbody.component';
import {TuiTableTr} from '../tr/tr.component';
import {ExpandableTableRowFillerComponent} from './expandable-table-row-filler/expandable-table-row-filler.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]:not([heading])',
    imports: [ExpandableTableRowFillerComponent, NgIf],
    templateUrl: './tbody-new.template.html',
    styleUrls: ['./tbody-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_TABLE_PROVIDER,
        {provide: TuiTableTbody, useExisting: forwardRef(() => TuiTableTbodyNew)},
    ],
})
export class TuiTableTbodyNew<T extends Partial<Record<keyof T, any>>>
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
