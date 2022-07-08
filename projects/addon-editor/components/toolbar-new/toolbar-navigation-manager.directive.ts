import {Directive, ElementRef, HostListener, Inject} from '@angular/core';
import {
    clamp,
    getClosestFocusable,
    isNativeFocusedIn,
    isNativeMouseFocusable,
    setNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiToolbarNavigationManager]',
})
export class TuiToolbarNavigationManagerDirective {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    private get toolsContainers(): readonly HTMLElement[] {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[tuiItem]'),
        );
    }

    @HostListener('keydown.arrowRight.prevent', ['false'])
    @HostListener('keydown.arrowLeft.prevent', ['true'])
    onHorizontalNavigation(toPrevious: boolean): void {
        const {toolsContainers} = this;
        const focusedToolIndex = toolsContainers.findIndex(isNativeFocusedIn);

        const targetToolIndex = clamp(
            focusedToolIndex + (toPrevious ? -1 : 1),
            0,
            toolsContainers.length - 1,
        );
        const targetToolWrapper = toolsContainers[targetToolIndex];
        const targetTool = toPrevious
            ? this.findPreviousTool(targetToolWrapper)
            : this.findNextTool(targetToolWrapper);

        if (targetTool) {
            setNativeFocused(targetTool);
        }
    }

    findFirstFocusableTool(reversed: boolean = false): TuiNativeFocusableElement | null {
        const tools = reversed
            ? this.toolsContainers.slice().reverse()
            : this.toolsContainers;

        for (const el of tools) {
            const focusableElement = isNativeMouseFocusable(el)
                ? el
                : getClosestFocusable(el, false, el, false);

            if (focusableElement) {
                return focusableElement;
            }
        }

        return null;
    }

    private findPreviousTool(wrapper: HTMLElement): HTMLElement | null {
        if (isNativeMouseFocusable(wrapper)) {
            return wrapper;
        }

        const lookedInside = getClosestFocusable(wrapper, false, wrapper, false);

        return (
            lookedInside ||
            getClosestFocusable(wrapper, true, this.elementRef.nativeElement, false)
        );
    }

    private findNextTool(wrapper: HTMLElement): HTMLElement | null {
        return isNativeMouseFocusable(wrapper)
            ? wrapper
            : getClosestFocusable(wrapper, false, this.elementRef.nativeElement, false);
    }
}
