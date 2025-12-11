import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    model,
    viewChildren,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_PAGINATION_OPTIONS} from './pagination.options';

const ELLIPSIS_ITEM_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;

@Component({
    selector: 'tui-pagination',
    imports: [PolymorpheusOutlet, TuiButton],
    templateUrl: './pagination.template.html',
    styleUrl: './pagination.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPagination {
    private readonly els = viewChildren('element', {read: ElementRef});
    private readonly el = tuiInjectElement();
    private readonly maxHalfLength = computed(
        () => this.sidePadding() + ELLIPSIS_ITEM_LENGTH + this.activePadding(),
    );

    private readonly maxElementsLength = computed(
        () => this.maxHalfLength() * 2 + ACTIVE_ITEM_LENGTH,
    );

    private readonly lastElementIndex = computed(() => this.elementsLength() - 1);
    private readonly itemsFit = computed(() => this.length() <= this.maxElementsLength());
    private readonly lastIndex = computed(() => this.length() - 1);
    private readonly reverseIndex = computed(
        (): number => this.lastIndex() - this.index(),
    );

    protected readonly texts = inject(TUI_PAGINATION_TEXTS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = inject(TUI_PAGINATION_OPTIONS);
    protected readonly buttonSize = computed(() => (this.size() === 'm' ? 'xs' : 's'));
    protected readonly elementsLength = computed(() =>
        this.itemsFit() ? this.length() : this.maxElementsLength(),
    );

    public readonly length = input(1);
    public readonly focusable = input(true);
    public readonly size = input(this.options.size);
    public readonly disabled = input(false);
    public readonly activePadding = input(1);
    public readonly sidePadding = input(1);
    public readonly content = input<PolymorpheusContent<TuiContext<number>>>();
    public readonly index = model(0);
    public readonly arrowIsDisabledRight = computed(() => this.reverseIndex() === 0);
    public readonly arrowIsDisabledLeft = computed(() => this.index() === 0);
    public readonly nativeFocusableElement = computed((): HTMLElement | null => {
        if (this.disabled()) {
            return null;
        }

        let activeElementIndex = 0;

        for (let i = 0; i < this.elementsLength(); i++) {
            const itemIndex = this.getItemIndexByElementIndex(i);

            if (itemIndex) {
                activeElementIndex++;
            }

            if (itemIndex === this.index()) {
                break;
            }
        }

        return (
            this.els().find((_, index) => index === activeElementIndex)?.nativeElement ??
            null
        );
    });

    public get focused(): boolean {
        return tuiIsFocusedIn(this.el);
    }

    protected elementIsFocusable(index: number): boolean {
        return this.index() === index && !this.focused;
    }

    /**
     * Get index by element index
     * @param elementIndex
     * @returns index or null (for '…')
     */
    protected getItemIndexByElementIndex(elementIndex: number): number | null {
        const reverseElementIndex = this.lastElementIndex() - elementIndex;

        if (elementIndex < this.sidePadding()) {
            return elementIndex;
        }

        if (reverseElementIndex < this.sidePadding()) {
            return this.lastIndex() - reverseElementIndex;
        }

        if (elementIndex === this.sidePadding() && this.hasCollapsedItems(this.index())) {
            return null;
        }

        if (
            reverseElementIndex === this.sidePadding() &&
            this.hasCollapsedItems(this.reverseIndex())
        ) {
            return null;
        }

        const computedIndex = this.index() - this.maxHalfLength() + elementIndex;

        return tuiClamp(
            computedIndex,
            elementIndex,
            this.lastIndex() - reverseElementIndex,
        );
    }

    protected getElementMode(index = -1): string {
        return this.options.appearance(this.index() === index);
    }

    protected onElementClick(index: number): void {
        this.updateIndex(index);
    }

    protected onElementKeyDownArrowLeft(element: HTMLElement): void {
        if (element === this.els()[0]?.nativeElement) {
            return;
        }

        const previous = this.els().find(
            (_, index, array) => array[index + 1]?.nativeElement === element,
        );

        previous?.nativeElement.focus();
    }

    protected onElementKeyDownArrowRight(element: HTMLElement): void {
        if (element === this.els()[this.els().length - 1]?.nativeElement) {
            return;
        }

        const next = this.els().find(
            (_, index, array) => array[index - 1]?.nativeElement === element,
        );

        next?.nativeElement.focus();
    }

    protected onArrowClick(direction: TuiHorizontalDirection): void {
        this.tryChangeTo(direction);
        this.nativeFocusableElement()?.focus();
    }

    /**
     * Are there collapsed items at that index
     * @param index
     * @returns there are collapsed items
     */
    private hasCollapsedItems(index: number): boolean {
        return !this.itemsFit() && index > this.maxHalfLength();
    }

    private tryChangeTo(direction: TuiHorizontalDirection): void {
        this.updateIndex(
            tuiClamp(
                this.index() + (direction === 'right' ? 1 : -1),
                0,
                this.lastIndex(),
            ),
        );
    }

    private updateIndex(index: number): void {
        if (this.index() !== index) {
            this.index.set(index);
        }
    }
}
