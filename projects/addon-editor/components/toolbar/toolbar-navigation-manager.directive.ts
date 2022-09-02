import {Directive, ElementRef, HostListener, Inject} from '@angular/core';
import type {TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    tuiClamp,
    tuiGetClosestFocusable,
    tuiIsNativeFocusedIn,
    tuiIsNativeMouseFocusable,
} from '@taiga-ui/cdk';

@Directive({
    selector: `[tuiToolbarNavigationManager]`,
})
export class TuiToolbarNavigationManagerDirective {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    private get toolsContainers(): readonly HTMLElement[] {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>(`[tuiItem]`),
        );
    }

    @HostListener(`keydown.arrowRight.prevent`, [`false`])
    @HostListener(`keydown.arrowLeft.prevent`, [`true`])
    onHorizontalNavigation(toPrevious: boolean): void {
        const {toolsContainers} = this;
        const focusedToolIndex = toolsContainers.findIndex(tuiIsNativeFocusedIn);

        const targetToolIndex = tuiClamp(
            focusedToolIndex + (toPrevious ? -1 : 1),
            0,
            toolsContainers.length - 1,
        );
        const targetToolWrapper = toolsContainers[targetToolIndex];
        const targetTool = toPrevious
            ? this.findPreviousTool(targetToolWrapper)
            : this.findNextTool(targetToolWrapper);

        if (targetTool) {
            targetTool.focus();
        }
    }

    findFirstFocusableTool(reversed: boolean = false): TuiNativeFocusableElement | null {
        const tools = reversed
            ? this.toolsContainers.slice().reverse()
            : this.toolsContainers;

        for (const el of tools) {
            const focusableElement = tuiIsNativeMouseFocusable(el)
                ? el
                : tuiGetClosestFocusable({initial: el, root: el, keyboard: false});

            if (focusableElement) {
                return focusableElement;
            }
        }

        return null;
    }

    private findPreviousTool(wrapper: HTMLElement): HTMLElement | null {
        if (tuiIsNativeMouseFocusable(wrapper)) {
            return wrapper;
        }

        const lookedInside = tuiGetClosestFocusable({
            initial: wrapper,
            root: wrapper,
            keyboard: false,
        });

        return (
            lookedInside ||
            tuiGetClosestFocusable({
                initial: wrapper,
                root: this.elementRef.nativeElement,
                previous: true,
                keyboard: false,
            })
        );
    }

    private findNextTool(wrapper: HTMLElement): HTMLElement | null {
        return tuiIsNativeMouseFocusable(wrapper)
            ? wrapper
            : tuiGetClosestFocusable({
                  initial: wrapper,
                  root: this.elementRef.nativeElement,
                  keyboard: false,
              });
    }
}
