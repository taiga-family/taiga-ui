import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiElementDirective,
    tuiIsNativeFocused,
    tuiIsPresent,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListAccessor,
    TuiDataList,
    TuiLoaderComponent,
    TuiOptionComponent,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper:not([labels])',
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListAccessor(TuiDataListWrapperComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    imports: [
        NgIf,
        NgForOf,
        PolymorpheusModule,
        TuiDataList,
        TuiElementDirective,
        TuiLoaderComponent,
    ],
})
export class TuiDataListWrapperComponent<T> {
    public readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    @Input()
    public items: readonly T[] | null = [];

    @Input()
    public disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER, {optional: true})?.size || 'm';

    @Output()
    public readonly itemClick = new EventEmitter<T>();

    @ViewChildren(forwardRef(() => TuiOptionComponent))
    protected readonly optionsQuery: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

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
