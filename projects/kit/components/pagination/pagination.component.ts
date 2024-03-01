import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    EMPTY_QUERY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocusedIn,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TUI_SPIN_ICONS,
    TuiAppearance,
    TuiBrightness,
    TuiButtonComponent,
    TuiHorizontalDirection,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeS,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiHorizontalDirectionToNumber} from '@taiga-ui/kit/utils/math';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, map} from 'rxjs';

const DOTS_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;

@Component({
    selector: 'tui-pagination',
    templateUrl: './pagination.template.html',
    styleUrls: ['./pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiPaginationComponent)],
})
export class TuiPaginationComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor
{
    @ViewChildren('element', {read: TUI_FOCUSABLE_ITEM_ACCESSOR})
    private readonly els: QueryList<TuiFocusableElementAccessor> = EMPTY_QUERY;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly modeDirective = inject(TuiModeDirective, {optional: true});

    @Input()
    public length = 1;

    @Input()
    public size: TuiSizeL | TuiSizeS = 'l';

    @Input()
    public readonly disabled = false;

    /**
     * Amount of visible pages around active page
     */
    @Input()
    public activePadding = 1;

    /**
     * Amount of visible pages at the edges
     */
    @Input()
    public sidePadding = 1;

    /**
     * Customization for page number display.
     */
    @Input()
    public content: PolymorpheusContent<TuiContext<number>>;

    /**
     * Active page index
     */
    @Input()
    public index = 0;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    protected readonly mode$ = this.modeDirective
        ? this.modeDirective.change$.pipe(map(() => this.modeDirective?.mode || null))
        : EMPTY;

    protected readonly texts$ = inject(TUI_PAGINATION_TEXTS);
    protected readonly icons = inject(TUI_SPIN_ICONS);

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
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

        return (
            this.els.find((_, index) => index === activeElementIndex)
                ?.nativeFocusableElement ?? null
        );
    }

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    public get arrowIsDisabledLeft(): boolean {
        return this.index === 0;
    }

    public get arrowIsDisabledRight(): boolean {
        return this.reverseIndex === 0;
    }

    /**
     * Number of items in a container.
     */
    protected get elementsLength(): number {
        return this.itemsFit ? this.length : this.maxElementsLength;
    }

    protected get buttonSize(): TuiSizeXS {
        return this.size === 'm' ? 'xs' : 's';
    }

    protected elementIsFocusable(index: number): boolean {
        return this.index === index && !this.focused;
    }

    /**
     * Get index by element index
     * @param elementIndex
     * @returns index or null (for '…')
     */
    protected getItemIndexByElementIndex(elementIndex: number): number | null {
        if (this.size === 's') {
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

    protected getElementMode(index: number): TuiAppearance {
        return this.index === index ? TuiAppearance.Primary : TuiAppearance.Flat;
    }

    protected getSmallElementMode(
        index: number,
        mode: TuiBrightness | null,
    ): TuiAppearance {
        return this.index === index && mode !== 'onLight'
            ? TuiAppearance.Primary
            : TuiAppearance.Secondary;
    }

    protected onElementClick(index: number): void {
        this.updateIndex(index);
    }

    protected onElementKeyDownArrowLeft(element: TuiButtonComponent): void {
        if (element === this.els.first) {
            return;
        }

        const previous = this.els.find((_, index, array) => array[index + 1] === element);

        if (previous?.nativeFocusableElement) {
            previous.nativeFocusableElement.focus();
        }
    }

    protected onElementKeyDownArrowRight(element: TuiButtonComponent): void {
        if (element === this.els.last) {
            return;
        }

        const next = this.els.find((_, index, array) => array[index - 1] === element);

        if (next?.nativeFocusableElement) {
            next.nativeFocusableElement.focus();
        }
    }

    protected onArrowClick(direction: TuiHorizontalDirection): void {
        this.tryChangeTo(direction);
        this.focusActive();
    }

    protected onActiveZone(focused: boolean): void {
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
