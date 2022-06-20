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
    tuiAssertIsHTMLElement,
    tuiDefaultProp,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiDataListAccessor} from '@taiga-ui/core/interfaces';
import {TUI_DATA_LIST_ACCESSOR, TUI_NOTHING_FOUND_MESSAGE} from '@taiga-ui/core/tokens';
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
    @ContentChildren(forwardRef(() => TuiOptionComponent), {descendants: true})
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;

    @Input()
    @HostBinding('attr.role')
    @tuiDefaultProp()
    role: TuiDataListRole = 'listbox';

    @Input()
    @tuiDefaultProp()
    emptyContent: PolymorpheusContent = '';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_NOTHING_FOUND_MESSAGE)
        readonly defaultEmptyContent$: Observable<string>,
    ) {}

    @tuiPure
    get empty$(): Observable<boolean> {
        return itemsQueryListObservable(this.options).pipe(map(({length}) => !length));
    }

    @HostListener('focusin', ['$event.relatedTarget', '$event.currentTarget'])
    onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    @HostListener('mousedown.prevent')
    noop(): void {}

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        moveFocus(elements.indexOf(current), elements, step);
    }

    // TODO: Consider aria-activedescendant for proper accessibility implementation
    @HostListener('wheel.silent.passive')
    @HostListener('mouseleave', ['$event.target'])
    handleFocusLossIfNecessary(
        element: HTMLElement = this.elementRef.nativeElement,
    ): void {
        if (this.origin && isNativeFocusedIn(element)) {
            setNativeMouseFocused(this.origin, true, true);
        }
    }

    getOptions(includeDisabled: boolean = false): readonly T[] {
        return this.options
            .toArray()
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(isPresent);
    }

    onFocus({target}: Event, top: boolean): void {
        tuiAssertIsHTMLElement(target);

        const {elements} = this;

        moveFocus(top ? -1 : elements.length, elements, top ? 1 : -1);
        this.handleFocusLossIfNecessary(target);
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.elementRef.nativeElement.querySelectorAll('[tuiOption]'));
    }
}
