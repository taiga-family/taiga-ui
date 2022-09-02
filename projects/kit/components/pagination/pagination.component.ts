import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import type {
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    TuiInjectionTokenType,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    AbstractTuiInteractive,
    EMPTY_QUERY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    tuiDefaultProp,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import type {TuiBrightness, TuiSizeS} from '@taiga-ui/core';
import {
    TuiAppearance,
    TuiButtonComponent,
    TuiHorizontalDirection,
    TuiModeDirective,
} from '@taiga-ui/core';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiHorizontalDirectionToNumber} from '@taiga-ui/kit/utils/math';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const DOTS_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;

@Component({
    selector: `tui-pagination`,
    templateUrl: `./pagination.template.html`,
    styleUrls: [`./pagination.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiPaginationComponent)],
})
export class TuiPaginationComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor
{
    @ViewChildren(`element`, {read: TUI_FOCUSABLE_ITEM_ACCESSOR})
    private readonly elements: QueryList<TuiFocusableElementAccessor> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp(nonNegativeInteger, `Must be non-negative integer`)
    length = 1;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS = `m`;

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
    @tuiDefaultProp(nonNegativeInteger, `Must be non-negative integer`)
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_PAGINATION_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_PAGINATION_TEXTS>,
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
        return tuiIsNativeFocusedIn(this.elementRef.nativeElement);
    }

    /**
     * Number of items in a container.
     */
    get elementsLength(): number {
        return this.itemsFit ? this.length : this.maxElementsLength;
    }

    get sizeM(): boolean {
        return this.size === `m`;
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

        return tuiClamp(
            computedIndex,
            elementIndex,
            this.lastIndex - reverseElementIndex,
        );
    }

    getElementMode(index: number): TuiAppearance {
        return this.index === index ? TuiAppearance.Primary : TuiAppearance.Flat;
    }

    getSmallElementMode(index: number, mode: TuiBrightness | null): TuiAppearance {
        return this.index === index && mode !== `onLight`
            ? TuiAppearance.Primary
            : TuiAppearance.Secondary;
    }

    onElementClick(index: number): void {
        this.updateIndex(index);
    }

    onElementKeyDownArrowLeft(element: TuiButtonComponent): void {
        if (element === this.elements.first) {
            return;
        }

        const previous = this.elements.find(
            (_, index, array) => array[index + 1] === element,
        );

        if (previous?.nativeFocusableElement) {
            previous.nativeFocusableElement.focus();
        }
    }

    onElementKeyDownArrowRight(element: TuiButtonComponent): void {
        if (element === this.elements.last) {
            return;
        }

        const next = this.elements.find(
            (_, index, array) => array[index - 1] === element,
        );

        if (next?.nativeFocusableElement) {
            next.nativeFocusableElement.focus();
        }
    }

    onArrowClick(direction: TuiHorizontalDirection): void {
        this.tryChangeTo(direction);
        this.focusActive();
    }

    onActiveZone(focused: boolean): void {
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

    private tryChangeTo(direction: TuiHorizontalDirection): void {
        this.updateIndex(
            tuiClamp(
                this.index + tuiHorizontalDirectionToNumber(direction),
                0,
                this.lastIndex,
            ),
        );
    }

    private focusActive(): void {
        const {nativeFocusableElement} = this;

        if (nativeFocusableElement) {
            nativeFocusableElement.focus();
        }
    }

    private updateIndex(index: number): void {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}

function nonNegativeInteger(length: number): boolean {
    return Number.isInteger(length) && length >= 0;
}
