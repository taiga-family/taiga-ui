import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {Controller, TUI_MODE, TuiBrightness, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TUI_TABLE_PROVIDERS} from '../providers/table.providers';

@Directive({
    selector: 'table[tuiTable]',
    providers: TUI_TABLE_PROVIDERS,
    host: {
        '[$.data-mode.attr]': 'mode$',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiTableDirective<T> extends Controller {
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

    @Input()
    @HostBinding('class._sticky')
    @tuiDefaultProp()
    sticky = true;

    @Output()
    readonly directionChange = new EventEmitter<-1 | 1>();

    @Output()
    readonly sorterChange = new EventEmitter<TuiComparator<T> | null>();

    @HostBinding('$.class._stuck')
    @HostListener('$.class._stuck')
    readonly stuck$ = asCallable(
        this.entries$.pipe(map(([{intersectionRatio}]) => intersectionRatio < 1)),
    );

    constructor(
        @Inject(IntersectionObserverService)
        readonly entries$: Observable<IntersectionObserverEntry[]>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
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
}
