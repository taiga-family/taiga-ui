import {NgForOf, NgIf} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListAccessor} from '@taiga-ui/core/components/data-list';
import {
    tuiAsDataListAccessor,
    TuiDataList,
    TuiDataListComponent,
    tuiInjectDataListSize,
    TuiOption,
} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {tuiAsAuxiliary} from '@taiga-ui/core/components/textfield';
import type {TuiDataListHost} from '@taiga-ui/core/tokens';
import {TUI_DATA_LIST_HOST} from '@taiga-ui/core/tokens';
import type {TuiValueContentContext} from '@taiga-ui/core/types';
import type {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper:not([labels])',
    imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListAccessor(TuiDataListWrapperComponent),
        tuiAsAuxiliary(TuiDataListWrapperComponent),
    ],
})
export class TuiDataListWrapperComponent<T, K = T> implements TuiDataListAccessor<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly datalist = signal<TuiDataListComponent<unknown> | null>(null);

    @ViewChildren(forwardRef(() => TuiOption))
    protected readonly optionsQuery: QueryList<TuiOption<T>> = EMPTY_QUERY;

    protected readonly syncOptionContent = effect(() => {
        this.datalist()?.optionContent.set(this.optionContent());
    }, TUI_ALLOW_SIGNAL_WRITES);

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

    public readonly optionContent = signal(null);

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
        return this.optionsQuery
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }

    // TODO(v5): use signal queries
    @ViewChild(TuiDataListComponent)
    protected set datalistSetter(x: TuiDataListComponent<unknown>) {
        this.datalist.set(x);
    }

    protected $cast(items: readonly K[]): readonly T[] {
        return items as unknown as readonly T[];
    }
}
