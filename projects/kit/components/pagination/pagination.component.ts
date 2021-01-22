import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    clamp,
    EMPTY_QUERY,
    isNativeFocusedIn,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiBrightness,
    TuiButtonComponent,
    TuiHorizontalDirection,
    TuiModeDirective,
    TuiSizeS,
} from '@taiga-ui/core';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';
import {horizontalDirectionToNumber} from '@taiga-ui/kit/utils/math';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

const DOTS_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;

export function nonNegativeInteger(length: number): boolean {
    return Number.isInteger(length) && length >= 0;
}

// @dynamic
@Component({
    selector: 'tui-pagination',
    templateUrl: './pagination.template.html',
    styleUrls: ['./pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiPaginationComponent),
        },
    ],
})
export class TuiPaginationComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp(nonNegativeInteger, 'Must be non-negative integer')
    length = 1;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    @Input()
    @tuiDefaultProp()
    readonly disabled = false;

    /**
     * Amount of visible pages around active page
     */
    @Input()
    @tuiDefaultProp()
    activePadding = 1;

    /**
     * Amount of visible pages at the edges
     */
    @Input()
    @tuiDefaultProp()
    sidePadding = 1;

    /**
     * Customization for page number display.
     */
    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<TuiContextWithImplicit<number>> | null = null;

    /**
     * Active page index
     */
    @Input()
    @tuiDefaultProp(nonNegativeInteger, 'Must be non-negative integer')
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    @ViewChildren('element', {read: TUI_FOCUSABLE_ITEM_ACCESSOR})
    private readonly elements: QueryList<TuiFocusableElementAccessor> = EMPTY_QUERY;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_PAGINATION_TEXTS) readonly texts$: Observable<[string, string]>,
    ) {
        super();
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        if (this.disabled) {
            return null;
        }

        let activeElementIndex = 0;
        const {elementsLength} = this;

        for (let i = 0; i < elementsLength; i++) {
            const itemIndex = this.getItemIndexByElementIndex(i);

            if (itemIndex) {
                activeElementIndex++;
            }

            if (itemIndex === this.index) {
                break;
            }
        }

        const activeElement = this.elements.find(
            (_, index) => index === activeElementIndex,
        );

        return activeElement ? activeElement.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }

    /**
     * Количество пунктов в контейнере.
     */
    get elementsLength(): number {
        return this.itemsFit ? this.length : this.maxElementsLength;
    }

    get sizeM(): boolean {
        return this.size === 'm';
    }

    get mode(): TuiBrightness | null {
        return this.modeDirective ? this.modeDirective.mode : null;
    }

    get arrowIsDisabledLeft(): boolean {
        return this.index === 0;
    }

    get arrowIsDisabledRight(): boolean {
        return this.reverseIndex === 0;
    }

    elementIsFocusable(index: number): boolean {
        return this.index === index && !this.focused;
    }

    getItemContext(index: number): TuiContextWithImplicit<number> {
        return {$implicit: index};
    }

    /**
     * Get index by element index
     * @param elementIndex
     * @returns index or null (for '…')
     */
    getItemIndexByElementIndex(elementIndex: number): number | null {
        if (!this.sizeM) {
            return elementIndex;
        }

        if (elementIndex < this.sidePadding) {
            return elementIndex;
        }

        if (elementIndex === this.sidePadding && this.hasCollapsedItems(this.index)) {
            return null;
        }

        const reverseElementIndex = this.lastElementIndex - elementIndex;

        if (
            reverseElementIndex === this.sidePadding &&
            this.hasCollapsedItems(this.reverseIndex)
        ) {
            return null;
        }

        if (reverseElementIndex < this.sidePadding) {
            return this.lastIndex - reverseElementIndex;
        }

        const computedIndex = this.index - this.maxHalfLength + elementIndex;

        return clamp(computedIndex, elementIndex, this.lastIndex - reverseElementIndex);
    }

    getElementMode(index: number): TuiAppearance {
        return this.index === index ? TuiAppearance.Primary : TuiAppearance.Flat;
    }

    getSmallElementMode(index: number, mode: TuiBrightness | null): TuiAppearance {
        return this.index === index && mode !== 'onLight'
            ? TuiAppearance.Primary
            : TuiAppearance.Secondary;
    }

    onElementClick(index: number) {
        this.updateIndex(index);
    }

    onElementKeyDownArrowLeft(element: TuiButtonComponent) {
        if (element === this.elements.first) {
            return;
        }

        const previous = this.elements.find(
            (_, index, array) => array[index + 1] === element,
        );

        if (previous && previous.nativeFocusableElement) {
            setNativeFocused(previous.nativeFocusableElement);
        }
    }

    onElementKeyDownArrowRight(element: TuiButtonComponent) {
        if (element === this.elements.last) {
            return;
        }

        const next = this.elements.find(
            (_, index, array) => array[index - 1] === element,
        );

        if (next && next.nativeFocusableElement) {
            setNativeFocused(next.nativeFocusableElement);
        }
    }

    onArrowClick(direction: TuiHorizontalDirection) {
        this.tryChangeTo(direction);
        this.focusActive();
    }

    onActiveZone(focused: boolean) {
        this.updateFocused(focused);
    }

    /**
     * Active index from the end
     */
    private get reverseIndex(): number {
        return this.lastIndex - this.index;
    }

    /**
     * Max number of elements in half (not counting the middle one).
     */
    private get maxHalfLength(): number {
        return this.sidePadding + DOTS_LENGTH + this.activePadding;
    }

    /**
     * Is there '...' anywhere
     */
    private get itemsFit(): boolean {
        return this.length <= this.maxElementsLength;
    }

    /**
     * Max number of elements
     */
    private get maxElementsLength(): number {
        return this.maxHalfLength * 2 + ACTIVE_ITEM_LENGTH;
    }

    private get lastIndex(): number {
        return this.length - 1;
    }

    private get lastElementIndex(): number {
        return this.elementsLength - 1;
    }

    /**
     * Are there collapsed items at that index
     * @param index
     * @returns there are collapsed items
     */
    private hasCollapsedItems(index: number): boolean {
        return !this.itemsFit && index > this.maxHalfLength;
    }

    private tryChangeTo(direction: TuiHorizontalDirection) {
        this.updateIndex(
            clamp(this.index + horizontalDirectionToNumber(direction), 0, this.lastIndex),
        );
    }

    private focusActive() {
        const {nativeFocusableElement} = this;

        if (nativeFocusableElement) {
            setNativeFocused(nativeFocusableElement);
        }
    }

    private updateIndex(index: number) {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}
