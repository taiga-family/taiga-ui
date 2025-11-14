import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    forwardRef,
    inject,
    input,
    isSignal,
    output,
    type QueryList,
    viewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDataListAccessor,
    TuiDataList,
    type TuiDataListAccessor,
    TuiDataListComponent,
    tuiInjectDataListSize,
    TuiOption,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {type TuiValueContentContext} from '@taiga-ui/core/types';
import {
    TUI_ITEMS_HANDLERS as TUI_ITEMS_HANDLERS_LEGACY,
    type TuiItemsHandlers as TuiItemsHandlersLegacy,
} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector:
        'tui-data-list-wrapper:not([labels]), tui-data-list-wrapper:not([labels])[new]', // TODO(v5): remove [new]
    imports: [PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
    templateUrl: './data-list-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T, K = T> implements TuiDataListAccessor<T> {
    private readonly datalist = viewChild(TuiDataListComponent<T>);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    // TODO(v5): delete
    private readonly itemsHandlersLegacy: TuiItemsHandlersLegacy<T> = inject(
        TUI_ITEMS_HANDLERS_LEGACY,
    );

    // TODO(v5): delete
    @ViewChildren(forwardRef(() => TuiOption))
    protected readonly legacyOptionsQuery: QueryList<TuiOption<T>> = EMPTY_QUERY;

    // TODO(v5): delete
    @ViewChildren(forwardRef(() => TuiOptionWithValue))
    protected readonly optionsQuery: QueryList<TuiOptionWithValue<T>> = EMPTY_QUERY;

    protected readonly newOptionMode = tuiInjectElement().hasAttribute('new');

    public readonly items = input<readonly K[] | null>([]);

    public readonly disabledItemHandler = input<TuiBooleanHandler<T>>(
        this.newOptionMode
            ? this.itemsHandlers?.disabledItemHandler()
            : this.itemsHandlersLegacy.disabledItemHandler,
    );

    public readonly emptyContent = input<PolymorpheusContent>();

    public readonly size = input(tuiInjectDataListSize());

    public readonly itemClick = output<T>();

    public readonly options = computed(() => this.datalist()?.options() ?? []);

    public readonly itemContent = input<PolymorpheusContent<TuiValueContentContext<T>>>(
        ({$implicit}) =>
            this.newOptionMode
                ? this.itemsHandlers.stringify()($implicit)
                : this.itemsHandlersLegacy.stringify($implicit),
    );

    public getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: tuiIsFocused(nativeElement)};
    }

    // TODO(v5): delete
    public getOptions(includeDisabled = false): readonly T[] {
        return [
            ...this.legacyOptionsQuery, // TODO(v5): delete
            ...this.optionsQuery,
        ]
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => (isSignal(value) ? value() : value))
            .filter(tuiIsPresent);
    }

    protected $cast(items: readonly K[] | null): readonly T[] {
        return items as unknown as readonly T[];
    }
}
