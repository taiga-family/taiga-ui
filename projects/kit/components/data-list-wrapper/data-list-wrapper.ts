import {
    Directive,
    type ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    type QueryList,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiIsNativeFocused, tuiIsPresent} from '@taiga-ui/cdk';
import {
    TuiOptionComponent,
    type TuiSizeL,
    type TuiSizeXS,
    type TuiValueContentContext,
} from '@taiga-ui/core';
import {type TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive()
export abstract class AbstractTuiDataListWrapper<T> {
    @Input()
    public disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size: TuiSizeL | TuiSizeXS = this.defaultSize;

    @Output()
    public readonly itemClick = new EventEmitter<T>();

    @ViewChildren(forwardRef(() => TuiOptionComponent))
    protected readonly optionsQuery: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    protected constructor(
        public readonly itemsHandlers: TuiItemsHandlers<T>,
        public readonly defaultSize: TuiSizeL | TuiSizeXS,
    ) {}

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
