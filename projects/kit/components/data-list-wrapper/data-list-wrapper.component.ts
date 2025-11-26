import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    viewChild,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {
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
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-data-list-wrapper:not([labels])',
    imports: [PolymorpheusOutlet, TuiDataList, TuiLoader],
    templateUrl: './data-list-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T, K = T> implements TuiDataListAccessor<T> {
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly datalist = viewChild(TuiDataListComponent<T>);
    protected readonly content = computed<PolymorpheusContent<TuiContext<T>>>(
        () =>
            this.itemContent() ?? (({$implicit}) => this.handlers.stringify()($implicit)),
    );

    public readonly options = computed(() => this.datalist()?.options() ?? []);
    public readonly items = input<readonly K[] | null>([]);
    public readonly emptyContent = input<PolymorpheusContent>();
    public readonly size = input(tuiInjectDataListSize());
    public readonly itemContent = input<PolymorpheusContent<TuiContext<T>>>();
    public readonly itemClick = output<T>();

    protected $cast(items: readonly K[] | null): readonly T[] {
        return items as unknown as readonly T[];
    }
}
