import {NgForOf, NgIf} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiElementDirective,
    tuiIsNativeFocused,
    tuiIsPresent,
} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';
import {
    tuiAsDataListAccessor,
    TuiDataList,
    tuiInjectDataListSize,
    TuiLoader,
    TuiOption,
} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper:not([labels])',
    imports: [
        TuiDataList,
        NgIf,
        NgForOf,
        TuiElementDirective,
        TuiLoader,
        PolymorpheusOutlet,
    ],
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T> {
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    @ViewChildren(forwardRef(() => TuiOption))
    protected readonly optionsQuery: QueryList<TuiOption<T>> = EMPTY_QUERY;

    @Input()
    public items: readonly T[] | null = [];

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
        this.itemsHandlers.stringify($implicit);

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
}
