import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, inject, Input, ViewContainerRef} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_SPACE,
    EMPTY_CLIENT_RECT,
    TUI_RANGE,
    TUI_TRUE_HANDLER,
    tuiGetNativeFocused,
    tuiInjectElement,
    tuiIsElement,
    tuiIsString,
    tuiIsTextfield,
    tuiIsTextNode,
    tuiPx,
} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core/classes';
import {tuiAsDriver, tuiAsRectAccessor, TuiDriver} from '@taiga-ui/core/classes';
import {TUI_SELECTION_STREAM} from '@taiga-ui/core/tokens';
import {tuiGetWordRange} from '@taiga-ui/core/utils';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    standalone: true,
    selector: '[tuiDropdownSelection]',
    providers: [
        tuiAsDriver(TuiDropdownSelectionDirective),
        tuiAsRectAccessor(TuiDropdownSelectionDirective),
    ],
})
export class TuiDropdownSelectionDirective
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private ghost?: HTMLElement;

    protected readonly doc = inject(DOCUMENT);
    protected readonly vcr = inject(ViewContainerRef);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly el = tuiInjectElement();
    protected readonly handler$ = new BehaviorSubject<TuiBooleanHandler<Range>>(
        TUI_TRUE_HANDLER,
    );

    protected readonly stream$ = combineLatest([
        this.handler$,
        inject(TUI_SELECTION_STREAM).pipe(
            map(() => this.getRange()),
            distinctUntilChanged(
                (x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset,
            ),
        ),
    ]).pipe(
        map(([handler, range]) => {
            const contained = this.el.contains(range.commonAncestorContainer);

            this.range =
                contained && tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;

            return (contained && handler(this.range)) || this.inDropdown(range);
        }),
    );

    protected range = inject(TUI_RANGE);

    @Input('tuiDropdownSelectionPosition')
    public position: 'selection' | 'tag' | 'word' = 'selection';

    public readonly type = 'dropdown';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @Input()
    public set tuiDropdownSelection(visible: TuiBooleanHandler<Range> | string) {
        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    }

    public getClientRect(): DOMRect {
        switch (this.position) {
            case 'tag': {
                const {commonAncestorContainer} = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;

                return element && tuiIsElement(element)
                    ? element.getBoundingClientRect()
                    : EMPTY_CLIENT_RECT;
            }
            case 'word':
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default:
                return this.range.getBoundingClientRect();
        }
    }

    public ngOnDestroy(): void {
        if (this.ghost) {
            this.vcr.element.nativeElement.removeChild(this.ghost);
        }
    }

    protected getRange(): Range {
        const active = tuiGetNativeFocused(this.doc);
        const selection = this.doc.getSelection();
        const range =
            active && tuiIsTextfield(active) && this.el.contains(active)
                ? this.veryVerySadInputFix(active)
                : (selection?.rangeCount && selection.getRangeAt(0)) || this.range;

        return range.cloneRange();
    }

    /**
     * Check if given range is at least partially inside dropdown
     */
    protected inDropdown(range: Range): boolean {
        const {startContainer, endContainer} = range;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown =
            this.boxContains(endContainer) && this.el.contains(startContainer);
        const dropdownToHost =
            this.boxContains(startContainer) && this.el.contains(endContainer);

        return inDropdown || hostToDropdown || dropdownToHost;
    }

    /**
     * Check if Node is inside dropdown
     */
    private boxContains(node: Node): boolean {
        return !!this.dropdown.dropdownBoxRef?.location.nativeElement.contains(node);
    }

    private veryVerySadInputFix(element: HTMLInputElement | HTMLTextAreaElement): Range {
        const {ghost = this.initGhost(element)} = this;
        const {top, left, width, height} = element.getBoundingClientRect();
        const {selectionStart, selectionEnd, value} = element;
        const range = this.doc.createRange();
        const hostRect = this.el.getBoundingClientRect();

        ghost.style.top = tuiPx(top - hostRect.top);
        ghost.style.left = tuiPx(left - hostRect.left);
        ghost.style.width = tuiPx(width);
        ghost.style.height = tuiPx(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;

        range.setStart(ghost.firstChild as Node, selectionStart || 0);
        range.setEnd(ghost.firstChild as Node, selectionEnd || 0);

        return range;
    }

    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    private initGhost(element: HTMLInputElement | HTMLTextAreaElement): HTMLElement {
        const ghost = this.doc.createElement('div');
        const {font, letterSpacing, textTransform, padding} = getComputedStyle(element);

        ghost.style.position = 'absolute';
        ghost.style.pointerEvents = 'none';
        ghost.style.opacity = '0';
        ghost.style.whiteSpace = 'pre-wrap';
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;

        this.vcr.element.nativeElement.appendChild(ghost);
        this.ghost = ghost;

        return ghost;
    }
}
