import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {INTERSECTION_ROOT_MARGIN} from '@ng-web-apis/intersection-observer';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiProvide, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiTextfieldOptions} from '@taiga-ui/core/components/textfield';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiChipOptionsProvider} from '@taiga-ui/kit/components/chip';
import {tuiProgressOptionsProvider} from '@taiga-ui/kit/components/progress';

import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiStuck} from './stuck.directive';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./table.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-table',
    },
})
class TuiTableStyles {}

@Directive({
    standalone: true,
    selector: 'table[tuiTable]',
    providers: [
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '10000px 10000px 10000px 0px',
        },
        tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
        tuiBadgeOptionsProvider({size: 'm', appearance: 'neutral'}),
        tuiChipOptionsProvider({size: 'xxs', appearance: 'neutral'}),
        tuiProgressOptionsProvider({size: 's', color: 'var(--tui-text-action)'}),
    ],
    hostDirectives: [TuiStuck],
    host: {
        style: 'border-collapse: separate',
        '[attr.data-size]': 'size()',
    },
})
export class TuiTableDirective<T extends Partial<Record<keyof T, any>>>
    extends AbstractTuiController
    implements AfterViewInit, TuiTextfieldOptions
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly cdr = inject(ChangeDetectorRef);

    protected readonly nothing = tuiWithStyles(TuiTableStyles);

    @Input()
    public columns: ReadonlyArray<string | keyof T> = [];

    @Input()
    public direction = this.options.direction;

    @Output()
    public readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    public readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    public readonly appearance = signal('table');
    public readonly size = signal(this.options.size);
    public readonly cleaner = signal(false);

    @Input('size')
    public set sizeSetter(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

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
