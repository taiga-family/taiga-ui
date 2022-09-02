import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, Inject, Input, ViewContainerRef} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    ALWAYS_TRUE_HANDLER,
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_SPACE,
    EMPTY_CLIENT_RECT,
    TUI_RANGE,
    tuiDefaultProp,
    tuiGetNativeFocused,
    tuiIsElement,
    tuiIsString,
    tuiIsTextfield,
    tuiIsTextNode,
    tuiPx,
} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core/abstract';
import {tuiAsDriver, tuiAsRectAccessor, TuiDriver} from '@taiga-ui/core/abstract';
import {TUI_SELECTION_STREAM} from '@taiga-ui/core/tokens';
import {tuiGetWordRange} from '@taiga-ui/core/utils';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    selector: `[tuiDropdown][tuiDropdownSelection]`,
    providers: [
        tuiAsDriver(TuiDropdownSelectionDirective),
        tuiAsRectAccessor(TuiDropdownSelectionDirective),
    ],
})
export class TuiDropdownSelectionDirective
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private readonly handler$ = new BehaviorSubject<TuiBooleanHandler<Range>>(
        ALWAYS_TRUE_HANDLER,
    );

    private readonly stream$ = combineLatest([
        this.handler$,
        this.selection$.pipe(
            map(() => this.getRange()),
            distinctUntilChanged(),
        ),
    ]).pipe(
        map(([handler, range]) => {
            const contained = this.elementRef.nativeElement.contains(
                range.commonAncestorContainer,
            );

            this.range =
                contained && tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;

            return (contained && handler(this.range)) || this.inDropdown(range);
        }),
    );

    private ghost?: HTMLElement;

    @Input(`tuiDropdownSelectionPosition`)
    @tuiDefaultProp()
    position: 'selection' | 'word' | 'tag' = `selection`;

    @Input()
    set tuiDropdownSelection(visible: TuiBooleanHandler<Range> | string) {
        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    }

    constructor(
        @Inject(TUI_RANGE) private range: Range,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TUI_SELECTION_STREAM) private readonly selection$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
        @Inject(TuiDropdownDirective) private readonly dropdown: TuiDropdownDirective,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    getClientRect(): ClientRect {
        switch (this.position) {
            case `tag`: {
                const {commonAncestorContainer} = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;

                return element && tuiIsElement(element)
                    ? element.getBoundingClientRect()
                    : EMPTY_CLIENT_RECT;
            }
            case `word`:
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default:
                return this.range.getBoundingClientRect();
        }
    }

    ngOnDestroy(): void {
        if (this.ghost) {
            this.viewContainerRef.element.nativeElement.removeChild(this.ghost);
        }
    }

    private getRange(): Range {
        const {nativeElement} = this.elementRef;
        const active = tuiGetNativeFocused(this.documentRef);
        const selection = this.documentRef.getSelection();

        if (active && tuiIsTextfield(active) && nativeElement.contains(active)) {
            return this.veryVerySadInputFix(active);
        }

        return selection?.rangeCount ? selection.getRangeAt(0) : this.range;
    }

    /**
     * Check if Node is inside dropdown
     */
    private boxContains(node: Node): boolean {
        return !!this.dropdown.dropdownBoxRef?.location.nativeElement.contains(node);
    }

    /**
     * Check if given range is at least partially inside dropdown
     */
    private inDropdown(range: Range): boolean {
        const {startContainer, endContainer} = range;
        const {nativeElement} = this.elementRef;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown =
            this.boxContains(endContainer) && nativeElement.contains(startContainer);
        const dropdownToHost =
            this.boxContains(startContainer) && nativeElement.contains(endContainer);

        return inDropdown || hostToDropdown || dropdownToHost;
    }

    private veryVerySadInputFix(element: HTMLInputElement | HTMLTextAreaElement): Range {
        const {ghost = this.initGhost(element)} = this;
        const {top, left, width, height} = element.getBoundingClientRect();
        const {selectionStart, selectionEnd, value} = element;
        const range = this.documentRef.createRange();
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();

        ghost.style.top = tuiPx(top - hostRect.top);
        ghost.style.left = tuiPx(left - hostRect.left);
        ghost.style.width = tuiPx(width);
        ghost.style.height = tuiPx(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;

        range.setStart(ghost.firstChild!, selectionStart || 0);
        range.setEnd(ghost.firstChild!, selectionEnd || 0);

        return range;
    }

    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    private initGhost(element: HTMLInputElement | HTMLTextAreaElement): HTMLElement {
        const ghost = this.documentRef.createElement(`div`);
        const {nativeElement} = this.viewContainerRef.element;
        const {font, letterSpacing, textTransform, padding} = getComputedStyle(element);

        ghost.style.position = `absolute`;
        ghost.style.pointerEvents = `none`;
        ghost.style.opacity = `0`;
        ghost.style.whiteSpace = `pre-wrap`;
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;

        nativeElement.appendChild(ghost);
        this.ghost = ghost;

        return ghost;
    }
}
