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
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {TuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_MODE, TuiBrightness, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TUI_STUCK} from '../providers/stuck.provider';
import {TUI_TABLE_PROVIDERS} from '../providers/table.providers';

@Directive({
    selector: 'table[tuiTable]',
    providers: TUI_TABLE_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
        '($.class._stuck)': 'stuck$',
    },
})
export class TuiTableDirective<T> extends TuiController {
    @Input()
    @tuiDefaultProp()
    columns: ReadonlyArray<keyof T | string> = [];

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    sorter: TuiComparator<T> | null = null;

    @Input()
    @tuiDefaultProp()
    direction: -1 | 1 = 1;

    @Output()
    readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    constructor(
        @Inject(IntersectionObserverService)
        readonly entries$: Observable<IntersectionObserverEntry[]>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_STUCK) readonly stuck$: Observable<boolean>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        super();
    }

    updateSorter(sorter: TuiComparator<T>) {
        if (this.sorter === sorter) {
            this.direction = this.direction === 1 ? -1 : 1;
            this.directionChange.emit(this.direction);
        } else {
            this.sorter = sorter;
            this.sorterChange.emit(this.sorter);
            this.direction = 1;
            this.directionChange.emit(1);
        }

        this.change$.next();
    }

    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
}
