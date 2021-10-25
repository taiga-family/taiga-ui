import {ElementRef, Inject, Injectable} from '@angular/core';
import {
    clamp,
    getClosestFocusable,
    isNativeFocusedIn,
    isNativeMouseFocusable,
    preventDefault,
    setNativeFocused,
    TuiNativeFocusableElement,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {filter, map, mapTo} from 'rxjs/operators';

@Injectable()
export class TuiToolbarNavigationService {
    private get toolsContainers(): ReadonlyArray<HTMLElement> {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>(
                '[tuiToolbarTool]',
            ),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    enableHorizontalNavigation$(): Observable<void> {
        return merge(
            this.getArrowStream('ArrowLeft').pipe(mapTo(true)),
            this.getArrowStream('ArrowRight').pipe(mapTo(false)),
        ).pipe(map(toPrevious => this.onHorizontalNavigation(toPrevious)));
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

    private onHorizontalNavigation(toPrevious: boolean) {
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

    private getArrowStream(
        arrowKey: 'ArrowRight' | 'ArrowLeft',
    ): Observable<KeyboardEvent> {
        return typedFromEvent(this.elementRef.nativeElement, 'keydown').pipe(
            filter(({key}) => key === arrowKey),
            preventDefault(),
        );
    }
}
