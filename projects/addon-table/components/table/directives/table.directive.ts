import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import type {TuiComparator} from '@taiga-ui/addon-table/types';
import {
    AbstractTuiController,
    tuiDefaultProp,
    TuiInjectionTokenType,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_MODE} from '@taiga-ui/core';

import {TUI_STUCK} from '../providers/stuck.provider';
import {TUI_TABLE_PROVIDERS} from '../providers/table.providers';

@Directive({
    selector: `table[tuiTable]`,
    providers: TUI_TABLE_PROVIDERS,
    host: {
        '($.data-mode.attr)': `mode$`,
        '($.class._stuck)': `stuck$`,
        style: `border-collapse: separate`,
    },
})
export class TuiTableDirective<T> extends AbstractTuiController {
    @Input()
    @tuiDefaultProp()
    columns: ReadonlyArray<keyof T | string> = [];

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = `m`;

    @Input()
    @tuiDefaultProp()
    direction: -1 | 1 = 1;

    @Output()
    readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    constructor(
        @Inject(IntersectionObserverService)
        readonly entries$: IntersectionObserverService,
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
        @Inject(TUI_STUCK) readonly stuck$: TuiInjectionTokenType<typeof TUI_STUCK>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        super();
    }

    @Input()
    @tuiDefaultProp()
    sorter: TuiComparator<T> = () => 0;

    updateSorter(sorter: TuiComparator<T> | null): void {
        if (this.sorter === sorter) {
            this.direction = this.direction === 1 ? -1 : 1;
            this.directionChange.emit(this.direction);
        } else {
            this.sorter = sorter || (() => 0);
            this.sorterChange.emit(this.sorter);
            this.direction = 1;
            this.directionChange.emit(1);
        }

        this.change$.next();
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}
