import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    EMPTY_QUERY,
    isNativeFocused,
    isPresent,
    TUI_DEFAULT_STRINGIFY,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
    TuiDataListAccessor,
    TuiOptionComponent,
    TuiSizeL,
    TuiSizeXS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-data-list-wrapper:not([labels])',
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_DATA_LIST_ACCESSOR,
            useExisting: forwardRef(() => TuiDataListWrapperComponent),
        },
    ],
})
export class TuiDataListWrapperComponent<T> implements TuiDataListAccessor<T> {
    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<ReadonlyArray<T>> | ReadonlyArray<T> | null = [];

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    emptyContent: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    itemContent: PolymorpheusContent<TuiValueContentContext<T>> = ({$implicit}) =>
        TUI_DEFAULT_STRINGIFY($implicit);

    @Input()
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeL = 'm';

    @ViewChildren(forwardRef(() => TuiOptionComponent))
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    getContext(
        $implicit: T,
        {nativeElement}: ElementRef<HTMLElement>,
    ): TuiValueContentContext<T> {
        return {$implicit, active: isNativeFocused(nativeElement)};
    }

    getOptions(includeDisabled: boolean = false): ReadonlyArray<T> {
        return this.options
            .toArray()
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(isPresent);
    }
}
