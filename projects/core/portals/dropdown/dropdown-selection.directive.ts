import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {
    computed,
    Directive,
    inject,
    input,
    type OnDestroy,
    PLATFORM_ID,
    ViewContainerRef,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_SPACE,
    EMPTY_CLIENT_RECT,
    TUI_TRUE_HANDLER,
} from '@taiga-ui/cdk/constants';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {
    tuiInjectElement,
    tuiIsElement,
    tuiIsTextfield,
    tuiIsTextNode,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsString, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    type TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {TUI_SELECTION_STREAM} from '@taiga-ui/core/tokens';
import {tuiGetWordRange} from '@taiga-ui/core/utils/dom';
import {
    combineLatest,
    distinctUntilChanged,
    filter,
    fromEvent,
    map,
    merge,
    startWith,
    tap,
    throttleTime,
} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    selector: '[tuiDropdownSelection]',
    providers: [
        tuiAsDriver(TuiDropdownSelection),
        tuiAsRectAccessor(TuiDropdownSelection),
    ],
})
export class TuiDropdownSelection
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private ghost?: HTMLElement;

    protected readonly doc = inject(DOCUMENT);
    protected readonly vcr = inject(ViewContainerRef);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly el = tuiInjectElement();
    protected readonly handler = computed((visible = this.tuiDropdownSelection()) =>
        tuiIsString(visible) ? TUI_TRUE_HANDLER : visible,
    );

    protected readonly stream$ = combineLatest([
        toObservable(this.handler),
        inject(TUI_SELECTION_STREAM).pipe(
            map(() => this.getRange()),
            filter((range) => this.isValid(range)),
            distinctUntilChanged(
                (x, y) =>
                    x.startOffset === y.startOffset &&
                    x.endOffset === y.endOffset &&
                    x.commonAncestorContainer === y.commonAncestorContainer,
            ),
        ),
        merge(fromEvent(this.el, 'scroll', {passive: true, capture: true})).pipe(
            throttleTime(16),
            startWith(0),
        ),
    ]).pipe(
        tap(([, range]) => {
            this.range =
                this.el.contains(range.commonAncestorContainer) &&
                tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;
        }),
        map(([handler, range]) => {
            const contained = this.el.contains(range.commonAncestorContainer);
            const valid = contained && handler(this.range);
            const visible = valid || this.inDropdown(range);
            const active = tuiGetFocused(this.doc);
            const textfield =
                active && tuiIsTextfield(active) && this.el.contains(active);

            return visible && textfield
                ? this.isCaretVisible(active as HTMLTextAreaElement)
                : visible;
        }),
    );

    protected range = isPlatformBrowser(inject(PLATFORM_ID))
        ? new Range()
        : ({} as unknown as Range);

    public readonly type = 'dropdown';
    public readonly tuiDropdownSelection = input<TuiBooleanHandler<Range> | string>('');
    public readonly tuiDropdownSelectionPosition = input<'selection' | 'tag' | 'word'>(
        'selection',
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    public getClientRect(): DOMRect {
        switch (this.tuiDropdownSelectionPosition()) {
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
            this.ghostHost.removeChild(this.ghost);
        }
    }

    private get ghostHost(): HTMLElement {
        return this.el.querySelector('tui-textfield .t-ghost') || this.el;
    }

    private getRange(): Range {
        const active = tuiGetFocused(this.doc);
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
    private inDropdown(range: Range): boolean {
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
        return !!this.dropdown.ref()?.location.nativeElement.contains(node);
    }

    /**
     * Check if range is not inside tui-textfield's DOM elements
     */
    private isValid(range: Range): boolean {
        return (
            !this.el.contains(range.commonAncestorContainer) ||
            !this.el.closest('tui-textfield') ||
            range.intersectsNode(this.ghost || this.el)
        );
    }

    private veryVerySadInputFix(element: HTMLInputElement | HTMLTextAreaElement): Range {
        const {ghost = this.initGhost(this.ghostHost)} = this;
        const {top, left, width, height} = this.ghostHost.getBoundingClientRect();
        const {selectionStart, selectionEnd, value} = element;
        const range = this.doc.createRange();
        const hostRect = this.ghostHost.getBoundingClientRect();

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
    private initGhost(
        element: HTMLElement | HTMLInputElement | HTMLTextAreaElement,
    ): HTMLElement {
        const ghost = this.doc.createElement('div');
        const {font, letterSpacing, textTransform, padding, borderTop} =
            getComputedStyle(element);

        ghost.style.position = 'absolute';
        ghost.style.pointerEvents = 'none';
        ghost.style.opacity = '0';
        ghost.style.whiteSpace = 'pre-wrap';
        ghost.style.boxSizing = 'border-box';
        ghost.style.borderTop = borderTop;
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;

        this.ghostHost.appendChild(ghost);
        this.ghost = ghost;

        return ghost;
    }

    private isCaretVisible(textarea: HTMLTextAreaElement): boolean {
        const caret = textarea.selectionStart;
        const div = this.doc.createElement('div');
        const style = getComputedStyle(textarea);

        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        div.style.whiteSpace = 'pre-wrap';
        div.style.overflowWrap = 'break-word';
        div.style.overflow = 'hidden';
        div.style.font = style.font;
        div.style.lineHeight = style.lineHeight;
        div.style.letterSpacing = style.letterSpacing;
        div.style.textTransform = style.textTransform;
        div.style.padding = style.padding;
        div.style.border = style.border;
        div.style.width = style.width;
        div.style.boxSizing = style.boxSizing;
        div.textContent = textarea.value.slice(0, caret);

        const span = this.doc.createElement('span');

        span.textContent = '\u00A0';
        div.appendChild(span);

        this.doc.body.appendChild(div);

        const caretTop = span.offsetTop;
        const caretHeight = span.offsetHeight;

        this.doc.body.removeChild(div);

        const visibleTop = textarea.scrollTop;
        const visibleBottom = visibleTop + textarea.clientHeight;
        const paddingCompensation = 2;

        return (
            caretTop + paddingCompensation >= visibleTop &&
            caretTop + caretHeight - paddingCompensation <= visibleBottom
        );
    }
}
