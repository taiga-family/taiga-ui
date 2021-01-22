import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import {
    EMPTY_QUERY,
    isNativeFocusedIn,
    isPresent,
    itemsQueryListObservable,
    moveFocus,
    setNativeMouseFocused,
    tuiDefaultProp,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiDataListAccessor} from '@taiga-ui/core/interfaces';
import {TUI_DATA_LIST_ACCESSOR} from '@taiga-ui/core/tokens';
import {TuiDataListRole} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TuiOptionComponent} from './option/option.component';

// TODO: Consider aria-activedescendant for proper accessibility implementation
// @dynamic
@Component({
    selector: 'tui-data-list',
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: TUI_DATA_LIST_ACCESSOR,
            useExisting: forwardRef(() => TuiDataListComponent),
        },
    ],
})
export class TuiDataListComponent<T> implements TuiDataListAccessor<T> {
    @Input()
    @HostBinding('attr.role')
    @tuiDefaultProp()
    role: TuiDataListRole = 'listbox';

    @Input()
    @tuiDefaultProp()
    emptyContent: PolymorpheusContent = '';

    @ContentChildren(forwardRef(() => TuiOptionComponent), {descendants: true})
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    @tuiPure
    get empty$(): Observable<boolean> {
        return itemsQueryListObservable(this.options).pipe(map(({length}) => !length));
    }

    getOptions(includeDisabled: boolean = false): ReadonlyArray<T> {
        return this.options
            .toArray()
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(isPresent);
    }

    @HostListener('focusin', ['$event.relatedTarget', '$event.currentTarget'])
    onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement) {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    @HostListener('mousedown.prevent')
    noop() {}

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number) {
        const {elements} = this;

        moveFocus(elements.indexOf(current), elements, step);
    }

    onFocus(element: HTMLElement, top: boolean) {
        const {elements} = this;

        moveFocus(top ? -1 : elements.length, elements, top ? 1 : -1);
        this.handleFocusLossIfNecessary(element);
    }

    // TODO: Consider aria-activedescendant for proper accessibility implementation
    @HostListener('mouseleave', ['$event.target'])
    handleFocusLossIfNecessary(element: HTMLElement) {
        if (this.origin && isNativeFocusedIn(element)) {
            setNativeMouseFocused(this.origin, true, true);
        }
    }

    private get elements(): ReadonlyArray<HTMLElement> {
        return Array.from(this.elementRef.nativeElement.querySelectorAll('[tuiOption]'));
    }
}
