import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    NgZone,
    Optional,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {isSelectionIn, tuiInsertHtml} from '@taiga-ui/addon-editor/utils';
import {
    EMPTY_QUERY,
    isFirefox,
    isNativeFocusedIn,
    isNumber,
    setNativeFocused,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHandler,
    TuiNativeFocusableElement,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {
    TUI_DOCUMENT_OR_SHADOW_ROOT,
    TuiButtonComponent,
    TuiHostedDropdownComponent,
} from '@taiga-ui/core';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit';
import {merge, Observable} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

const DEFAULT_FONT = `haas, helvetica, arial, sans-serif`;
const MONOSPACE_FONT = `Courier`;
const IE_TRANSPARENT = 16777215;

// eslint-disable-next-line @typescript-eslint/naming-convention
export function toolsAssertion(tools: readonly TuiEditorTool[]): boolean {
    return !tools.includes(TuiEditorTool.Tex) && !tools.includes(TuiEditorTool.Attach);
}

// @dynamic
@Component({
    selector: `tui-toolbar:not([new])`,
    templateUrl: `./toolbar.template.html`,
    styleUrls: [`./toolbar.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
    host: {
        role: `toolbar`,
    },
})
export class TuiToolbarComponent {
    @ViewChildren(`button`)
    private readonly buttons: QueryList<TuiButtonComponent> = EMPTY_QUERY;

    @ViewChildren(`dropdown`, {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly documentRef: Document;
    private range: Range | null = null;

    @Input()
    @tuiDefaultProp(toolsAssertion, `Attach and TeX are not yet implemented in Editor`)
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    @Input()
    @tuiDefaultProp()
    editor: HTMLElement | null = null;

    @Input()
    @HostBinding(`class._disabled`)
    @tuiDefaultProp()
    disabled = false;

    @Output()
    readonly linkAdded = new EventEmitter<string>();

    @Output()
    readonly texClicked = new EventEmitter<void>();

    @Output()
    readonly attachClicked = new EventEmitter<void>();

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    // TODO: i18n
    readonly fontsOptions: readonly TuiEditorFontOption[] = [
        {
            size: `2`,
            px: 13,
            name: `Small`,
        },
        {
            size: `3`,
            px: 15,
            name: `Normal`,
        },
        {
            size: `4`,
            px: 17,
            name: `Large`,
        },
        {
            size: `5`,
            px: 24,
            family: `var(--tui-font-heading)`,
            name: `Subtitle`,
        },
        {
            size: `6`,
            px: 30,
            family: `var(--tui-font-heading)`,
            name: `Title`,
        },
    ];

    // TODO: i18n
    readonly codeOptions: readonly string[] = [`Code in the text`, `Code in block`];

    constructor(
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Optional()
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        shadowRootRef: Document | null,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<Record<string, string>>,
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
    ) {
        this.documentRef = shadowRootRef || documentRef;

        merge(
            typedFromEvent(this.documentRef, `selectionchange`),
            typedFromEvent(this.documentRef, `input`),
        )
            .pipe(takeUntil(destroy$))
            .subscribe(() => {
                this.refreshRange();
                ngZone.run(() => {
                    changeDetectorRef.markForCheck();
                });
            });
    }

    get focused(): boolean {
        return (
            isNativeFocusedIn(this.elementRef.nativeElement) ||
            !!this.dropdowns.find(({nativeElement}) => isNativeFocusedIn(nativeElement))
        );
    }

    get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    get firstButton(): TuiNativeFocusableElement | null {
        const first = this.buttons.find(
            ({nativeFocusableElement}) => !!nativeFocusableElement,
        );

        return first?.nativeFocusableElement || null;
    }

    get lastButton(): TuiNativeFocusableElement | null {
        return this.buttons.reduce<TuiNativeFocusableElement | null>(
            (last, {nativeFocusableElement}) => nativeFocusableElement || last,
            null,
        );
    }

    get bold(): boolean {
        return this.documentRef.queryCommandState(`bold`);
    }

    get italic(): boolean {
        return this.documentRef.queryCommandState(`italic`);
    }

    get underline(): boolean {
        return this.documentRef.queryCommandState(`underline`);
    }

    get strikeThrough(): boolean {
        return this.documentRef.queryCommandState(`strikeThrough`);
    }

    get unorderedList(): boolean {
        return this.documentRef.queryCommandState(`insertUnorderedList`);
    }

    get orderedList(): boolean {
        return this.documentRef.queryCommandState(`insertOrderedList`);
    }

    get blockquote(): boolean {
        const selection = this.documentRef.getSelection();

        return !!selection && isSelectionIn(selection, `blockquote`);
    }

    get a(): boolean {
        const selection = this.documentRef.getSelection();

        return !!selection && isSelectionIn(selection, `a`);
    }

    get foreColorBlank(): boolean {
        return this.foreColor === `rgb(51, 51, 51)`;
    }

    get hiliteColorBlank(): boolean {
        const {hiliteColor} = this;

        return (
            !hiliteColor ||
            String(hiliteColor) === String(IE_TRANSPARENT) ||
            hiliteColor === `transparent` ||
            hiliteColor === `rgba(0, 0, 0, 0)` ||
            (hiliteColor === `rgb(0, 0, 0)` && !this.focused)
        );
    }

    get jumpAnchor(): boolean {
        return (this.editor as unknown as AbstractTuiEditor)?.isActive(`jumpAnchor`);
    }

    get canOpenAnchor(): boolean {
        return !this.a && !this.jumpAnchor;
    }

    get undoDisabled(): boolean {
        return !this.documentRef.queryCommandEnabled(`undo`);
    }

    get redoDisabled(): boolean {
        return !this.documentRef.queryCommandEnabled(`redo`);
    }

    get code(): boolean {
        // fontName can return null in IE for some reason
        return (
            !this.pre &&
            (this.documentRef.queryCommandValue(`fontName`) || ``).replace(/"/g, ``) ===
                MONOSPACE_FONT
        );
    }

    get pre(): boolean {
        const selection = this.documentRef.getSelection();

        return !!selection && isSelectionIn(selection, `pre`);
    }

    get subscript(): boolean {
        return this.documentRef.queryCommandState(`subscript`);
    }

    get superscript(): boolean {
        return this.documentRef.queryCommandState(`superscript`);
    }

    get foreColor(): string {
        const color: string | number =
            this.documentRef.queryCommandValue(`foreColor`) || `rgb(51, 51, 51)`;

        // Number in IE
        return isNumber(color) ? this.numberToColor(color) : color;
    }

    get hiliteColor(): string {
        if (!isFirefox(this.userAgent)) {
            // Doesn't work in Firefox for more than a decade: https://bugzilla.mozilla.org/show_bug.cgi?id=547848
            const color = this.documentRef.queryCommandValue(`backColor`);

            // Number in IE
            return isNumber(color) && color !== IE_TRANSPARENT
                ? this.numberToColor(color)
                : color;
        }

        const selection = this.documentRef.getSelection();
        let element =
            selection && selection.focusNode instanceof HTMLElement
                ? selection.focusNode
                : null;

        while (element) {
            if (element.style?.backgroundColor) {
                return element.style.backgroundColor;
            }

            element = element.parentElement;
        }

        return ``;
    }

    get formatEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Bold) ||
            this.enabled(TuiEditorTool.Italic) ||
            this.enabled(TuiEditorTool.Underline) ||
            this.enabled(TuiEditorTool.Strikethrough)
        );
    }

    get firstBigBlockEnabled(): boolean {
        return (
            this.formatEnabled ||
            this.enabled(TuiEditorTool.Align) ||
            this.enabled(TuiEditorTool.List) ||
            this.enabled(TuiEditorTool.Quote) ||
            this.enabled(TuiEditorTool.Link) ||
            this.enabled(TuiEditorTool.Anchor) ||
            this.enabled(TuiEditorTool.Attach)
        );
    }

    get secondBigBlockEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Code) ||
            this.enabled(TuiEditorTool.Tex) ||
            this.enabled(TuiEditorTool.Img) ||
            this.enabled(TuiEditorTool.HR)
        );
    }

    onBottomFocus(): void {
        this.focusLast();
    }

    onTopFocus(): void {
        this.focusFirst();
    }

    onArrowLeft(): void {
        const focusedIndex = this.buttons.reduce(
            (focusedIndex, button, index) => (button.focused ? index : focusedIndex),
            -1,
        );
        const previous = this.buttons.reduce<TuiNativeFocusableElement | null>(
            (last, {nativeFocusableElement}, index) =>
                index < focusedIndex && nativeFocusableElement
                    ? nativeFocusableElement
                    : last,
            null,
        );

        if (previous) {
            setNativeFocused(previous);
        } else {
            this.focusLast();
        }
    }

    onArrowRight(): void {
        const focusedIndex = this.buttons.reduce(
            (focusedIndex, button, index) => (button.focused ? index : focusedIndex),
            -1,
        );
        const nextButton = this.buttons.find(
            ({nativeFocusableElement}, index) =>
                index > focusedIndex && !!nativeFocusableElement,
        );

        if (nextButton?.nativeFocusableElement) {
            setNativeFocused(nextButton.nativeFocusableElement);
        } else {
            this.focusFirst();
        }
    }

    onFont(size: string): void {
        this.focusEditor();
        this.documentRef.execCommand(`fontSize`, false, size);
    }

    onAlign(align: string): void {
        this.focusEditor();
        this.documentRef.execCommand(align);
    }

    onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        if (file) {
            this.imageLoader(file)
                .pipe(take(1), takeUntil(this.destroy$))
                .subscribe(image => {
                    this.addImage(image);
                });
        }

        input.value = ``;
    }

    onAttach(): void {
        this.attachClicked.emit();
    }

    onTeX(): void {
        this.texClicked.emit();
    }

    onLinkClick(): void {
        this.focusEditor();
    }

    onLink(hosted: TuiHostedDropdownComponent, url?: string): void {
        hosted.open = false;

        if (url) {
            this.linkAdded.emit(url);
        }
    }

    onCode(code: string): void {
        if (this.codeOptions[0] === code) {
            this.toggleCode();
        } else {
            this.togglePre();
        }
    }

    setAnchor(hosted: TuiHostedDropdownComponent, anchor?: string): void {
        hosted.open = false;

        if (anchor) {
            (this.editor as unknown as AbstractTuiEditor)?.setAnchor(anchor);
            (this.editor as unknown as AbstractTuiEditor)?.selectClosest();
        }
    }

    removeAnchor(): void {
        (this.editor as unknown as AbstractTuiEditor)?.removeAnchor();
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.tools.includes(tool);
    }

    undo(): void {
        this.focusEditor();
        this.documentRef.execCommand(`undo`);
    }

    redo(): void {
        this.focusEditor();
        this.documentRef.execCommand(`redo`);
    }

    indent(): void {
        this.focusEditor();
        this.documentRef.execCommand(`indent`);
    }

    outdent(): void {
        this.focusEditor();
        this.documentRef.execCommand(`outdent`);
    }

    insertHorizontalRule(): void {
        this.focusEditor();
        this.documentRef.execCommand(`insertHorizontalRule`);
    }

    removeFormat(): void {
        // @bad TODO: Write our own method to remove PRE etc
        this.focusEditor();
        this.documentRef.execCommand(`removeFormat`);
    }

    setForeColor(color: string): void {
        this.focusEditor();
        this.documentRef.execCommand(`foreColor`, false, color);
    }

    setHiliteColor(color: string): void {
        this.focusEditor();
        this.documentRef.execCommand(`hiliteColor`, false, color);
    }

    toggleBold(): void {
        this.focusEditor();
        this.documentRef.execCommand(`bold`);
    }

    toggleItalic(): void {
        this.focusEditor();
        this.documentRef.execCommand(`italic`);
    }

    toggleUnderline(): void {
        this.focusEditor();
        this.documentRef.execCommand(`underline`);
    }

    toggleStrikeThrough(): void {
        this.focusEditor();
        this.documentRef.execCommand(`strikeThrough`);
    }

    toggleOrderedList(): void {
        this.focusEditor();
        this.documentRef.execCommand(`insertOrderedList`);
    }

    toggleUnorderedList(): void {
        this.focusEditor();
        this.documentRef.execCommand(`insertUnorderedList`);
    }

    toggleQuote(): void {
        if (this.blockquote) {
            this.outdent();
        } else {
            this.indent();
        }
    }

    toggleSubscript(): void {
        this.focusEditor();
        this.documentRef.execCommand(`subscript`);
    }

    toggleSuperscript(): void {
        this.focusEditor();
        this.documentRef.execCommand(`superscript`);
    }

    private toggleCode(): void {
        this.focusEditor();
        this.documentRef.execCommand(
            `fontName`,
            false,
            this.code ? DEFAULT_FONT : MONOSPACE_FONT,
        );
    }

    // @bad TODO: Fix multiple issues with toggling
    private togglePre(): void {
        const selection = this.documentRef.getSelection();

        if (!selection || selection.isCollapsed || !this.pre) {
            this.documentRef.execCommand(
                `formatBlock`,
                false,
                this.pre ? `<P>` : `<PRE>`,
            );

            return;
        }

        const html = Array.prototype.slice
            .call(selection.getRangeAt(0).cloneContents().childNodes)
            // Actually a Node, but early return handles text nodes
            .map((node: Element) => {
                if (!node.tagName || node.tagName.toLowerCase() !== `pre`) {
                    return node;
                }

                const p = this.documentRef.createElement(`p`);

                p.innerHTML = node.innerHTML;

                return p;
            })
            .reduce(
                (result: string, node: Element) =>
                    result + (node.outerHTML || node.nodeValue),
                ``,
            );

        tuiInsertHtml(this.documentRef, html);
        this.focusEditor();
    }

    private addImage(image: string): void {
        this.focusEditor();
        this.documentRef.execCommand(`insertImage`, false, image);
    }

    private focusFirst(): void {
        const {firstButton} = this;

        if (firstButton) {
            setNativeFocused(firstButton);
        }
    }

    private focusLast(): void {
        const {lastButton} = this;

        if (lastButton) {
            setNativeFocused(lastButton);
        }
    }

    private refreshRange(): void {
        const selection = this.documentRef.defaultView
            ? this.documentRef.defaultView.getSelection()
            : null;

        if (
            selection &&
            this.editor &&
            this.editor.contains(selection.anchorNode) &&
            this.editor.contains(selection.focusNode)
        ) {
            this.range = selection.getRangeAt(0);
        }
    }

    private restoreRange(): void {
        const selection = this.documentRef.defaultView
            ? this.documentRef.defaultView.getSelection()
            : null;

        if (
            !selection ||
            !this.range ||
            !this.editor ||
            this.editor.contains(selection.anchorNode) ||
            this.editor.contains(selection.focusNode)
        ) {
            return;
        }

        selection.removeAllRanges();
        selection.addRange(this.range);
    }

    private focusEditor(): void {
        this.restoreRange();

        if (this.editor) {
            setNativeFocused(this.editor, true, true);
        } else {
            setNativeFocused(this.documentRef.body, true, true);
        }
    }

    // https://stackoverflow.com/a/11467243/2706426
    private numberToColor(color: number): string {
        return `rgb(${color & 0xff}, ${(color & 0xff00) >> 8}, ${
            (color & 0xff0000) >> 16
        })`;
    }
}
