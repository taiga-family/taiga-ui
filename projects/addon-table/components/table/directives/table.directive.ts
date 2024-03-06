import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {AbstractTuiController} from '@taiga-ui/cdk';
import {TUI_MODE} from '@taiga-ui/core';
import type {Observable} from 'rxjs';

import {TUI_STUCK} from '../providers/stuck.provider';
import {TUI_TABLE_PROVIDERS} from '../providers/table.providers';
import {TUI_TABLE_OPTIONS} from '../table.options';

@Directive({
    selector: 'table[tuiTable]',
    providers: TUI_TABLE_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
        '($.class._stuck)': 'stuck$',
        style: 'border-collapse: separate',
    },
})
export class TuiTableDirective<T extends Partial<Record<keyof T, any>>>
    extends AbstractTuiController
    implements AfterViewInit
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly cdr = inject(ChangeDetectorRef);

    @Input()
    public columns: ReadonlyArray<string | keyof T> = [];

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;

    @Input()
    public direction = this.options.direction;

    @Output()
    public readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    public readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    protected readonly mode$ = inject(TUI_MODE);
    protected readonly stuck$ = inject(TUI_STUCK);
    protected readonly entries$ = inject<Observable<IntersectionObserverEntry[]>>(
        IntersectionObserverService,
    );

    @Input()
    public sorter: TuiComparator<T> = () => 0;

    public updateSorterAndDirection(sorter: TuiComparator<T> | null): void {
        if (this.sorter === sorter) {
            this.updateDirection(this.direction === 1 ? -1 : 1);
        } else {
            this.updateSorter(sorter);
            this.updateDirection(1);
        }
    }

    public ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    public updateSorter(sorter: TuiComparator<T> | null): void {
        this.sorter = sorter || (() => 0);
        this.sorterChange.emit(this.sorter);
        this.change$.next();
    }

    private updateDirection(direction: -1 | 1): void {
        this.direction = direction;
        this.directionChange.emit(this.direction);
        this.change$.next();
    }
}
