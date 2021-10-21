import {
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    Inject,
    QueryList,
} from '@angular/core';
import {
    clamp,
    EMPTY_QUERY,
    getClosestFocusable,
    isNativeFocusedIn,
    isNativeMouseFocusable,
    setNativeFocused,
} from '@taiga-ui/cdk';

@Directive({
    selector: '[toolbarTool]',
})
export class TuiToolbarToolDirective {}

@Directive({
    selector: '[toolbarNavigationManager]',
})
export class TuiToolbarNavigationManager {
    @ContentChildren(TuiToolbarToolDirective, {read: ElementRef, descendants: true})
    private readonly toolsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    get toolsContainers(): ReadonlyArray<HTMLElement> {
        return this.toolsRefs.map(({nativeElement}) => nativeElement);
    }

    @HostListener('keydown.arrowRight.prevent', ['false'])
    @HostListener('keydown.arrowLeft.prevent', ['true'])
    onHorizontalNavigation(toPrevious: boolean) {
        const focusedToolIndex = this.toolsContainers.findIndex(tool =>
            isNativeFocusedIn(tool),
        );

        const targetToolIndex = clamp(
            focusedToolIndex + (toPrevious ? -1 : 1),
            0,
            this.toolsContainers.length - 1,
        );
        const targetToolWrapper = this.toolsContainers[targetToolIndex];
        const targetTool = toPrevious
            ? this.findPreviousTool(targetToolWrapper)
            : this.findNextTool(targetToolWrapper);

        if (targetTool) {
            setNativeFocused(targetTool);
        }
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    private findPreviousTool(wrapper: HTMLElement): HTMLElement | null {
        if (isNativeMouseFocusable(wrapper)) {
            return wrapper;
        }

        const lookedInside = getClosestFocusable(wrapper, false, wrapper, false);

        if (lookedInside) {
            return lookedInside;
        }

        return getClosestFocusable(wrapper, true, this.elementRef.nativeElement, false);
    }

    private findNextTool(wrapper: HTMLElement): HTMLElement | null {
        if (isNativeMouseFocusable(wrapper)) {
            return wrapper;
        }

        return getClosestFocusable(wrapper, false, this.elementRef.nativeElement, false);
    }
}
