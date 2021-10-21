import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {
    defaultEditorColors,
    defaultEditorTools,
    EDITOR_BLANK_COLOR,
} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {
    TUI_EDITOR_CODE_OPTIONS,
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
} from '@taiga-ui/addon-editor/tokens';
import {
    clamp,
    EMPTY_QUERY,
    getClosestElement,
    getClosestFocusable,
    isNativeFocusedIn,
    isNativeMouseFocusable,
    setNativeFocused,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHandler,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {LanguageEditor} from '@taiga-ui/i18n';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

function toolsAssertion(tools: ReadonlyArray<TuiEditorTool>): boolean {
    return (
        tools.indexOf(TuiEditorTool.Tex) === -1 &&
        tools.indexOf(TuiEditorTool.Attach) === -1
    );
}

@Directive({
    selector: '[toolbarTool]',
})
export class TuiToolbarToolDirective {}

// @dynamic
@Component({
    selector: 'tui-toolbar[new]',
    templateUrl: './toolbar-new.template.html',
    styleUrls: ['./toolbar-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
    host: {
        role: 'toolbar',
    },
})
export class TuiToolbarNewComponent {
    @Input()
    @tuiDefaultProp(toolsAssertion, 'Attach and TeX are not yet implemented in Editor')
    tools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = defaultEditorColors;

    @Input()
    @HostBinding('class._disabled')
    @tuiDefaultProp()
    disabled = false;

    @Output()
    readonly linkAdded = new EventEmitter<string>();

    @Output()
    readonly texClicked = new EventEmitter<void>();

    @Output()
    readonly attachClicked = new EventEmitter<void>();

    @HostListener('mousedown', ['$event', '$event.target'])
    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestElement(target, 'button')) {
            return;
        }

        event.preventDefault();
        this.editor.focus();
    }

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(
            map(texts => [
                {
                    px: 15,
                    name: texts.normal,
                },
                {
                    px: 24,
                    family: 'var(--tui-font-heading)',
                    name: texts.subtitle,
                    headingLevel: 2,
                },
                {
                    px: 30,
                    family: 'var(--tui-font-heading)',
                    name: texts.title,
                    headingLevel: 1,
                },
            ]),
        );

    @ViewChildren(TuiToolbarToolDirective, {read: ElementRef})
    private readonly toolsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    get toolsContainers(): ReadonlyArray<HTMLElement> {
        return this.toolsRefs.map(({nativeElement}) => nativeElement);

        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[toolbarTool]'),
        );
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
        @Optional()
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_CODE_OPTIONS)
        readonly codeOptionsTexts$: Observable<LanguageEditor['editorCodeOptions']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            LanguageEditor['editorFontOptions']
        >,
    ) {}

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
        return this.toolsContainers.find(tool => isNativeMouseFocusable(tool)) || null;
    }

    get lastButton(): TuiNativeFocusableElement | null {
        return (
            this.toolsContainers
                .slice()
                .reverse()
                .find(tool => isNativeMouseFocusable(tool)) || null
        );
    }

    get bold(): boolean {
        return !!this.editor.isActive('bold');
    }

    get italic(): boolean {
        return !!this.editor.isActive('italic');
    }

    get underline(): boolean {
        return !!this.editor.isActive('underline');
    }

    get strikeThrough(): boolean {
        return !!this.editor.isActive('strike');
    }

    get unorderedList(): boolean {
        return !!this.editor.isActive('bulletList');
    }

    get orderedList(): boolean {
        return !!this.editor.isActive('orderedList');
    }

    get blockquote(): boolean {
        return !!this.editor.isActive('blockquote');
    }

    get a(): boolean {
        return !!this.editor.isActive('link');
    }

    get foreColorBlank(): boolean {
        return this.isBlankColor(this.foreColor);
    }

    get hiliteColorBlank(): boolean {
        return this.isBlankColor(this.hiliteColor);
    }

    get undoDisabled(): boolean {
        return !!this.editor.undoDisabled();
    }

    get redoDisabled(): boolean {
        return !!this.editor.redoDisabled();
    }

    get code(): boolean {
        return !!this.editor.isActive('code');
    }

    get pre(): boolean {
        return !!this.editor.isActive('codeBlock');
    }

    get subscript(): boolean {
        return !!this.editor.isActive('subscript');
    }

    get superscript(): boolean {
        return !!this.editor.isActive('superscript');
    }

    get foreColor(): string {
        return this.editor.getFontColor() || EDITOR_BLANK_COLOR;
    }

    get hiliteColor(): string {
        return this.editor.getBackgroundColor() || EDITOR_BLANK_COLOR;
    }

    get cellColor(): string {
        return this.editor.getCellColor() || EDITOR_BLANK_COLOR;
    }

    get canMergeCells(): boolean {
        return this.editor.canMergeCells();
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

    get alignLeft(): boolean {
        return !!this.editor.isActive({textAlign: 'left'});
    }

    get alignRight(): boolean {
        return !!this.editor.isActive({textAlign: 'right'});
    }

    get alignCenter(): boolean {
        return !!this.editor.isActive({textAlign: 'center'});
    }

    get justify(): boolean {
        return !!this.editor.isActive({textAlign: 'justify'});
    }

    onBottomFocus() {
        this.focusLast();
    }

    onTopFocus() {
        this.focusFirst();
    }

    onHeading({headingLevel}: TuiEditorFontOption) {
        if (headingLevel) {
            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph();
        }
    }

    onAlign(align: string) {
        this.editor.onAlign(align);
    }

    onImage(input: HTMLInputElement) {
        const file = input.files && input.files[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1))
            .subscribe(image => {
                this.addImage(image);
            });
    }

    onAttach() {
        this.attachClicked.emit();
    }

    onTeX() {
        this.texClicked.emit();
    }

    onLink(hosted: TuiHostedDropdownComponent, url?: string) {
        hosted.open = false;

        if (url) {
            this.editor.toggleLink(url);
        }
    }

    onCode(code: number) {
        if (code === 0) {
            this.toggleCode();
        } else {
            this.togglePre();
        }
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.tools.indexOf(tool) !== -1;
    }

    undo() {
        this.editor.undo();
    }

    redo() {
        this.editor.redo();
    }

    indent() {
        this.editor.indent();
    }

    outdent() {
        this.editor.outdent();
    }

    insertHorizontalRule() {
        this.editor.setHorizontalRule();
    }

    removeFormat() {
        this.editor.removeFormat();
    }

    setForeColor(color: string) {
        this.editor.setFontColor(color);
    }

    setHiliteColor(color: string) {
        this.editor.setBackgroundColor(color);
    }

    toggleBold() {
        this.editor.toggleBold();
    }

    toggleItalic() {
        this.editor.toggleItalic();
    }

    toggleUnderline() {
        this.editor.toggleUnderline();
    }

    toggleStrikeThrough() {
        this.editor.toggleStrike();
    }

    toggleOrderedList() {
        this.editor.toggleOrderedList();
    }

    toggleUnorderedList() {
        this.editor.toggleUnorderedList();
    }

    toggleQuote() {
        this.editor.toggleBlockquote();
    }

    toggleSubscript() {
        this.editor.toggleSubscript();
    }

    toggleSuperscript() {
        this.editor.toggleSuperscript();
    }

    private toggleCode() {
        this.editor.toggleCode();
    }

    private togglePre() {
        this.editor.toggleCodeBlock();
    }

    private addImage(image: string) {
        this.editor.setImage(image);
    }

    private isBlankColor(color: string): boolean {
        return color === EDITOR_BLANK_COLOR;
    }

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

    private focusFirst() {
        const {firstButton} = this;

        if (firstButton) {
            setNativeFocused(firstButton);
        }
    }

    private focusLast() {
        const {lastButton} = this;

        if (lastButton) {
            setNativeFocused(lastButton);
        }
    }
}
