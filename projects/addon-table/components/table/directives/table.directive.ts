import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Output,
    SkipSelf,
} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {TuiComparator} from '@taiga-ui/addon-table/types';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TUI_TEXTFIELD_SIZE,
    TuiAppearance,
    TuiBrightness,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from '@taiga-ui/kit';
import {Observable} from 'rxjs';

import {TUI_STUCK, TUI_STUCK_PROVIDER} from '../providers/stuck.provider';

// table.directive.ts -> table.providers.ts -> table.directive.ts
export const TUI_TABLE_PROVIDERS = [
    {
        provide: INTERSECTION_ROOT_MARGIN,
        useValue: `10000px 10000px 10000px 0px`,
    },
    {
        provide: INTERSECTION_THRESHOLD,
        useValue: [0, 1],
    },
    {
        provide: TUI_TEXTFIELD_APPEARANCE,
        useValue: TuiAppearance.Table,
    },
    {
        provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
        useValue: {
            labelOutside: true,
        },
    },
    {
        provide: TUI_INPUT_COUNT_OPTIONS,
        deps: [[new SkipSelf(), TUI_INPUT_COUNT_OPTIONS]],
        useFactory: (options: TuiInputCountOptions): TuiInputCountOptions => ({
            ...options,
            hideButtons: true,
        }),
    },
    {
        provide: TUI_TEXTFIELD_SIZE,
        useExisting: forwardRef(() => TuiTableDirective),
    },
    IntersectionObserverService,
    MODE_PROVIDER,
    TUI_STUCK_PROVIDER,
];

@Directive({
    selector: `table[tuiTable]`,
    providers: TUI_TABLE_PROVIDERS,
    host: {
        '($.data-mode.attr)': `mode$`,
        '($.class._stuck)': `stuck$`,
        style: `border-collapse: separate`,
    },
})
export class TuiTableDirective<
    T extends Partial<Record<keyof T, any>>,
> extends AbstractTuiController {
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
        readonly entries$: Observable<IntersectionObserverEntry[]>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_STUCK) readonly stuck$: Observable<boolean>,
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
