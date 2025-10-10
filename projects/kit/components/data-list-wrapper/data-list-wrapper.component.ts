import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    viewChild,
} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {
    tuiAsDataListAccessor,
    TuiDataList,
    type TuiDataListAccessor,
    TuiDataListComponent,
    tuiInjectDataListSize,
} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {type TuiValueContentContext} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-data-list-wrapper:not([labels]), tui-data-list-wrapper:not([labels])', // TODO(v5): remove [new]
    imports: [PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
    templateUrl: './data-list-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T, K = T> implements TuiDataListAccessor<T> {
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    protected readonly datalist =
        viewChild<TuiDataListComponent<T>>(TuiDataListComponent);

    @Input()
    public items: readonly K[] | null = [];

    @Input()
    public disabledItemHandler: TuiBooleanHandler<T> =
        this.itemsHandlers.disabledItemHandler();

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size = tuiInjectDataListSize();

    @Output()
    public readonly itemClick = new EventEmitter<T>();

    public readonly options = computed(() => this.datalist()?.options() ?? []);

    @Input()
    public itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.itemsHandlers.stringify()($implicit);

    public getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: tuiIsFocused(nativeElement)};
    }

    public getOptions(includeDisabled = false): readonly T[] {
        return this.datalist()?.getOptions(includeDisabled) ?? [];
    }

    protected $cast(items: readonly K[]): readonly T[] {
        return items as unknown as readonly T[];
    }
}
