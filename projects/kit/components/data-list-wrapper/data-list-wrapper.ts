import {
    Directive,
    ElementRef,
    forwardRef,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    tuiIsNativeFocused,
    tuiIsPresent,
} from '@taiga-ui/cdk';
import {
    TuiOptionComponent,
    TuiSizeL,
    TuiSizeXS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive()
export abstract class AbstractTuiDataListWrapper<T> {
    @ViewChildren(forwardRef(() => TuiOptionComponent))
    protected readonly optionsQuery: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    @tuiDefaultProp()
    emptyContent: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeL = `m`;

    protected constructor(protected readonly itemsHandlers: TuiItemsHandlers<T>) {}

    @Input()
    @tuiDefaultProp()
    itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        this.itemsHandlers.stringify($implicit);

    getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: tuiIsNativeFocused(nativeElement)};
    }

    getOptions(includeDisabled: boolean = false): readonly T[] {
        return this.optionsQuery
            .toArray()
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }
}
