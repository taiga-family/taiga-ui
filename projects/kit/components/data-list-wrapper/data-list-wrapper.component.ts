import {NgForOf, NgIf} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    isSignal,
    Output,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {
    TuiDataListAccessor,
    TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    tuiAsDataListAccessor,
    TuiDataList,
    tuiInjectDataListSize,
    TuiOption,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import type {TuiItemsHandlers} from '@taiga-ui/core/tokens';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/tokens';
import type {TuiValueContentContext} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector:
        'tui-data-list-wrapper:not([labels]), tui-data-list-wrapper:not([labels])[new]', // TODO(v5): remove [new]
    imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T, K = T> implements TuiDataListAccessor<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    @ViewChildren(forwardRef(() => TuiOption))
    protected readonly legacyOptionsQuery: QueryList<TuiOption<T>> = EMPTY_QUERY;

    @ViewChildren(forwardRef(() => TuiOptionWithValue))
    protected readonly optionsQuery: QueryList<TuiOptionWithValue<T>> = EMPTY_QUERY;

    protected readonly newOptionMode = tuiInjectElement().hasAttribute('new');

    @Input()
    public items: readonly K[] | null = [];

    @Input()
    public disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size = tuiInjectDataListSize();

    @Output()
    public readonly itemClick = new EventEmitter<T>();

    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.host.stringify?.($implicit) || this.itemsHandlers.stringify($implicit);

    public getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: tuiIsNativeFocused(nativeElement)};
    }

    public getOptions(includeDisabled = false): readonly T[] {
        return [
            ...this.legacyOptionsQuery, // TODO(v5): delete
            ...this.optionsQuery,
        ]
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => (isSignal(value) ? value() : value))
            .filter(tuiIsPresent);
    }

    protected $cast(items: readonly K[]): readonly T[] {
        return items as unknown as readonly T[];
    }
}
