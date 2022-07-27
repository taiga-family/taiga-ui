import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    EMPTY_QUERY,
    getOriginalArrayFromQueryList,
    isPresent,
    itemsQueryListObservable,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiControlValue,
    tuiDefaultProp,
    TuiIdentityMatcher,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
    TuiDataListHost,
    TuiOptionComponent,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `tui-opt-group[tuiMultiSelectGroup]`,
    templateUrl: `./multi-select-group.template.html`,
    styleUrls: [`./multi-select-group.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        {
            provide: TUI_OPTION_CONTENT,
            useValue: null,
        },
    ],
})
export class TuiMultiSelectGroupComponent<T> {
    @ContentChildren(TuiOptionComponent)
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp()
    label = ``;

    constructor(
        @Inject(TUI_DATA_LIST_HOST) private readonly host: TuiDataListHost<T>,
        @Inject(NgControl) private readonly control: NgControl,
    ) {}

    get size(): TuiSizeXS | TuiSizeL {
        return this.options.first?.size || `m`;
    }

    get checkboxSize(): TuiSizeL {
        return this.options.first && sizeBigger(this.options.first.size) ? `l` : `m`;
    }

    @tuiPure
    get empty$(): Observable<boolean> {
        return itemsQueryListObservable(this.options).pipe(map(({length}) => !length));
    }

    @tuiPure
    get disabled$(): Observable<boolean> {
        return itemsQueryListObservable(this.options).pipe(
            map(items => items.every(({disabled}) => disabled)),
        );
    }

    @tuiPure
    get value$(): Observable<boolean | null> {
        return combineLatest(this.items$, this.valueChanges$).pipe(
            map(([items, current]) => {
                let result = false;

                for (let i = 0; i < items.length; i++) {
                    const selected = current.some(selected =>
                        this.matcher(selected, items[i]),
                    );

                    if ((!selected && result) || (selected && !result && i)) {
                        return null;
                    }

                    result = selected;
                }

                return result;
            }),
        );
    }

    onClick(checked: boolean | null): void {
        if (!this.control.control) {
            return;
        }

        const controlValue: readonly T[] = this.control.value || [];
        const {values} = this;
        const filtered = controlValue.filter(current =>
            values.every(item => !this.matcher(current, item)),
        );

        this.control.control.setValue(checked ? filtered : [...filtered, ...values]);
    }

    private get values(): readonly T[] {
        return this.filter(getOriginalArrayFromQueryList(this.options));
    }

    private get matcher(): TuiIdentityMatcher<T> {
        return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
    }

    @tuiPure
    private get items$(): Observable<readonly T[]> {
        return itemsQueryListObservable(this.options).pipe(
            map(options => options.map(({value}) => value).filter(isPresent)),
        );
    }

    @tuiPure
    private get valueChanges$(): Observable<readonly T[]> {
        return tuiControlValue<readonly T[]>(this.control).pipe(
            map(value => value || []),
        );
    }

    @tuiPure
    private filter(items: ReadonlyArray<TuiOptionComponent<T>>): readonly T[] {
        return items.map(({value}) => value).filter(isPresent);
    }
}
