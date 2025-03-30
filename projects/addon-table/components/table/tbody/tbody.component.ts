import {AsyncPipe, NgIf} from '@angular/common';
import {
    ContentChild,
    type AfterViewInit,
    type OnChanges,
    type QueryList,
    type SimpleChanges,
} from '@angular/core';
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
import {ExpandableTableRowFillerComponent} from './expandable-table-row-filler/expandable-table-row-filler.component';
import {BehaviorSubject} from 'rxjs';
import {TuiTableExpandComponent} from './table-expand/table-expand.component';
import {TuiExpandableTableHeading} from '../directives/expandable-table-heading.directive';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]',
    imports: [
        NgIf,
        PolymorpheusOutlet,
        TuiChevron,
        TuiIcon,
        ExpandableTableRowFillerComponent,
        AsyncPipe,
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

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;
    @ContentChild(forwardRef(() => TuiTableExpandComponent))
    protected readonly customExpandContent: TuiTableExpandComponent<T> | null = null;
    @ContentChild(forwardRef(() => TuiExpandableTableHeading))
    protected readonly expandHeading: TuiExpandableTableHeading<T> | null = null;

    @Input()
    public data: readonly T[] = [];

    /** @deprecated: drop in v5.0, use TuiExpandableHeading */
    @Input()
    public heading: PolymorpheusContent;

    @Input()
    public open = this.options.open;

    @Input()
    public autoOpen = true;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    public open$ = new BehaviorSubject(this.open);
    protected showExpandableContent$ = new BehaviorSubject(this.open);
    protected showRowsFiller$ = new BehaviorSubject(false);

    ngAfterViewInit(): void {
        this.showRowsFiller$.next(
            Boolean(this.expandHeading) && !this.customExpandContent,
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('open' in changes) {
            this.open$.next(changes.open.currentValue);
        }

        if ('open' in changes && changes.open.firstChange) {
            this.showExpandableContent$.next(changes.open.currentValue);
        }
    }

    onClick = (): void => {
        if (this.autoOpen) {
            this.open = !this.open;
            this.open$.next(this.open);
            this.openChange.emit(this.open);
        }
    };

    onExpandAnimationDone(): void {
        if (this.open) {
            this.showExpandableContent$.next(true);
        }
    }

    onExpandAnimationStart(): void {
        if (!this.open) {
            this.showExpandableContent$.next(false);
        }
    }
}
