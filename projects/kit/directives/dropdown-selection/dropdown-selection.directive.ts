import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    forwardRef,
    Host,
    Inject,
    Injector,
    Input,
    NgZone,
    OnDestroy,
    Optional,
    Renderer2,
    ViewContainerRef,
} from '@angular/core';
import {
    ALWAYS_TRUE_HANDLER,
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_SPACE,
    EMPTY_CLIENT_RECT,
    getNativeFocused,
    px,
    TuiActiveZoneDirective,
    TuiBooleanHandler,
    TuiDestroyService,
    TuiParentsScrollService,
    TuiPortalService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {
    AbstractTuiDropdown,
    TUI_DOCUMENT_OR_SHADOW_ROOT,
    TUI_DROPDOWN_DIRECTIVE,
    TUI_ELEMENT_REF,
    TuiDropdown,
} from '@taiga-ui/core';
import {getWordRange} from '@taiga-ui/kit/utils/dom';
import {merge} from 'rxjs';
import {map, switchMapTo, takeUntil} from 'rxjs/operators';

// @dynamic
@Directive({
    selector: `[tuiDropdownSelection]:not(ng-container)`,
    providers: [
        {
            provide: TUI_DROPDOWN_DIRECTIVE,
            useExisting: forwardRef(() => TuiDropdownSelectionDirective),
        },
        TuiParentsScrollService,
        TuiDestroyService,
    ],
})
export class TuiDropdownSelectionDirective
    extends AbstractTuiDropdown
    implements TuiDropdown, OnDestroy
{
    private visibilityHandler: TuiBooleanHandler<Range> = ALWAYS_TRUE_HANDLER;
    private readonly documentRef: Document;
    private ghost?: HTMLElement;
    private range?: Range;

    @Input()
    set tuiDropdownSelection(handler: TuiBooleanHandler<Range> | '') {
        if (!handler || !this.range) {
            return;
        }

        const inHostAndValid =
            this.elementRef.nativeElement.contains(this.range.commonAncestorContainer) &&
            handler(this.range);

        this.visibilityHandler = handler;
        this.toggleDropdownBox(inHostAndValid);
    }

    @Input(`tuiDropdownSelectionPosition`)
    position: 'selection' | 'word' | 'tag' = `selection`;

    constructor(
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(ComponentFactoryResolver)
        componentFactoryResolver: ComponentFactoryResolver,
        @Inject(Injector) injector: Injector,
        @Inject(TuiPortalService) portalService: TuiPortalService,
        @Host() @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiActiveZoneDirective)
        @Optional()
        activeZone: TuiActiveZoneDirective | null,
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        @Optional()
        shadowRootRef: Document | null,
        @Inject(TUI_ELEMENT_REF)
        @Optional()
        customElementRef: ElementRef<HTMLElement> | null,
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(TuiParentsScrollService) readonly refresh$: TuiParentsScrollService,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    ) {
        super(
            componentFactoryResolver,
            injector,
            portalService,
            customElementRef || elementRef,
            activeZone,
        );
        this.documentRef = shadowRootRef || documentRef;

        // TODO: make better SSR protection
        if (!this.documentRef.createRange) {
            return;
        }

        this.range = this.documentRef.createRange();

        const {nativeElement} = this.elementRef;

        merge(
            typedFromEvent(this.documentRef, `selectionchange`),
            typedFromEvent(this.documentRef, `mouseup`),
            typedFromEvent(nativeElement, `mousedown`).pipe(
                switchMapTo(
                    typedFromEvent(nativeElement, `mousemove`).pipe(
                        takeUntil(typedFromEvent(this.documentRef, `mouseup`)),
                    ),
                ),
            ),
            typedFromEvent(nativeElement, `keyup`),
        )
            .pipe(
                map(() => {
                    const active = getNativeFocused(this.documentRef);
                    const selection = this.documentRef.getSelection();

                    // TODO: iframe warning
                    if (
                        (active instanceof HTMLInputElement ||
                            active instanceof HTMLTextAreaElement) &&
                        nativeElement.contains(active)
                    ) {
                        return this.veryVerySadInputFix(active);
                    }

                    return selection?.rangeCount ? selection.getRangeAt(0) : this.range;
                }),
                takeUntil(destroy$),
            )
            .subscribe(range => {
                const contained =
                    !!range && nativeElement.contains(range.commonAncestorContainer);

                this.range = contained ? range : this.range;

                const valid =
                    contained &&
                    (!this.visibilityHandler ||
                        !this.range ||
                        this.visibilityHandler(this.range));

                this.toggleDropdownBox(!!range && (valid || this.inDropdown(range)));
            });
    }

    get clientRect(): ClientRect {
        const {defaultView} = this.documentRef;
        const {rangeRect} = this;
        const frameElement = defaultView ? defaultView.frameElement : null;

        if (!frameElement) {
            return rangeRect;
        }

        const documentRect = frameElement.getBoundingClientRect();

        return {
            top: rangeRect.top + documentRect.top,
            left: rangeRect.left + documentRect.left,
            right: rangeRect.left + documentRect.left + rangeRect.width,
            bottom: rangeRect.top + documentRect.top + rangeRect.height,
            width: rangeRect.width,
            height: rangeRect.height,
        };
    }

    ngOnDestroy(): void {
        this.closeDropdownBox();

        if (this.ghost) {
            this.renderer.removeChild(
                this.viewContainerRef.element.nativeElement,
                this.ghost,
            );
        }
    }

    /**
     * get ClientRect of current Range according to provided position
     */
    private get rangeRect(): ClientRect {
        if (!this.range) {
            return EMPTY_CLIENT_RECT;
        }

        switch (this.position) {
            case `tag`: {
                const {commonAncestorContainer} = this.range;
                const element =
                    commonAncestorContainer.nodeType === Node.ELEMENT_NODE
                        ? commonAncestorContainer
                        : commonAncestorContainer.parentNode;

                return (element as Element).getBoundingClientRect();
            }
            case `word`:
                return getWordRange(this.range).getBoundingClientRect();
            default:
                return this.range.getBoundingClientRect();
        }
    }

    /**
     * Toggle dropdown visibility (has to be in ngZone.run because it could be initiated inside iframe in Editor)
     */
    private toggleDropdownBox(visible: boolean): void {
        this.ngZone.run(() => {
            if (visible) {
                this.openDropdownBox();
            } else {
                this.closeDropdownBox();
            }

            this.changeDetectorRef.markForCheck();
        });
    }

    /**
     * Check if Node is inside dropdown
     */
    private boxContains(node: Node): boolean {
        return (
            !!this.dropdownBoxRef &&
            this.dropdownBoxRef.location.nativeElement.contains(node)
        );
    }

    /**
     * Check if given range is at least partially inside dropdown
     */
    private inDropdown(range: Range): boolean {
        const {startContainer, endContainer} = range;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown =
            this.boxContains(endContainer) &&
            this.elementRef.nativeElement.contains(startContainer);
        const dropdownToHost =
            this.boxContains(startContainer) &&
            this.elementRef.nativeElement.contains(endContainer);

        return inDropdown || hostToDropdown || dropdownToHost;
    }

    /**
     * Position invisible DIV and create Range similar to selected range inside input/textarea
     */
    private veryVerySadInputFix(element: HTMLInputElement | HTMLTextAreaElement): Range {
        const {ghost = this.initGhost(element)} = this;
        const {top, left, width, height} = element.getBoundingClientRect();
        const {selectionStart, selectionEnd} = element;
        const range = this.documentRef.createRange();
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();

        ghost.style.top = px(top - hostRect.top);
        ghost.style.left = px(left - hostRect.left);
        ghost.style.width = px(width);
        ghost.style.height = px(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + element.value + CHAR_NO_BREAK_SPACE;

        range.setStart(ghost.firstChild!, selectionStart || 0);
        range.setEnd(ghost.firstChild!, selectionEnd || 0);

        return range;
    }

    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    private initGhost(element: HTMLInputElement | HTMLTextAreaElement): HTMLElement {
        const ghost = this.renderer.createElement(`div`);
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

        this.renderer.appendChild(nativeElement, ghost);
        this.ghost = ghost;

        return ghost;
    }
}
