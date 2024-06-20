import {AsyncPipe, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChildren,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    tuiClamp,
    tuiInjectElement,
    tuiIsNativeFocusedIn,
    TuiLet,
    TuiRepeatTimes,
} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection, TuiSizeL, TuiSizeS, TuiSizeXS} from '@taiga-ui/core';
import {TUI_SPIN_ICONS, TuiButton} from '@taiga-ui/core';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

const DOTS_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;

@Component({
    standalone: true,
    selector: 'tui-pagination',
    imports: [NgIf, AsyncPipe, TuiButton, TuiRepeatTimes, TuiLet, PolymorpheusOutlet],
    templateUrl: './pagination.template.html',
    styleUrls: ['./pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPagination {
    @ViewChildren('element', {read: ElementRef})
    private readonly els: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();

    protected readonly texts$ = inject(TUI_PAGINATION_TEXTS);
    protected readonly icons = inject(TUI_SPIN_ICONS);

    @Input()
    public length = 1;

    @Input()
    public focusable = true;

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

    public get nativeFocusableElement(): HTMLElement | null {
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
            this.els.find((_, index) => index === activeElementIndex)?.nativeElement ??
            null
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

    protected getElementMode(index: number): string {
        const fallback = this.size === 's' ? 'secondary' : 'flat';

        return this.index === index ? 'primary' : fallback;
    }

    protected onElementClick(index: number): void {
        this.updateIndex(index);
    }

    protected onElementKeyDownArrowLeft(element: HTMLElement): void {
        if (element === this.els.first.nativeElement) {
            return;
        }

        const previous = this.els.find(
            (_, index, array) => array[index + 1].nativeElement === element,
        );

        previous?.nativeElement.focus();
    }

    protected onElementKeyDownArrowRight(element: HTMLElement): void {
        if (element === this.els.last.nativeElement) {
            return;
        }

        const next = this.els.find(
            (_, index, array) => array[index - 1]?.nativeElement === element,
        );

        next?.nativeElement.focus();
    }

    protected onArrowClick(direction: TuiHorizontalDirection): void {
        this.tryChangeTo(direction);
        this.focusActive();
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

function tuiHorizontalDirectionToNumber(direction: TuiHorizontalDirection): -1 | 1 {
    switch (direction) {
        case 'left':
            return -1;
        case 'right':
            return 1;
    }
}
