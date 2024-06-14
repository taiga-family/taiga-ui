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
import {INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {AbstractTuiController, tuiProvide} from '@taiga-ui/cdk';
import type {TuiTextfieldOptions} from '@taiga-ui/core';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core';

import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiStuck} from './stuck.directive';

@Directive({
    selector: 'table[tuiTable]',
    providers: [
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '10000px 10000px 10000px 0px',
        },
        tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
    ],
    hostDirectives: [TuiStuck],
    host: {style: 'border-collapse: separate'},
})
export class TuiTableDirective<T extends Partial<Record<keyof T, any>>>
    extends AbstractTuiController
    implements AfterViewInit, TuiTextfieldOptions
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

    public readonly appearance = 'table';
    public readonly cleaner = false;

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
