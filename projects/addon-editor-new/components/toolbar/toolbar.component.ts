import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    defaultEditorColors,
    defaultEditorTools,
} from '@taiga-ui/addon-editor-new/constants';
import {TuiEditorTool} from '@taiga-ui/addon-editor-new/enums';
import {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {TUI_IMAGE_LOADER} from '@taiga-ui/addon-editor/tokens';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {
    EMPTY_QUERY,
    isNativeFocusedIn,
    setNativeFocused,
    tuiDefaultProp,
    TuiDestroyService,
    TuiHandler,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiButtonComponent, TuiHostedDropdownComponent} from '@taiga-ui/core';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit';
import {Editor} from '@tiptap/core';
import {redoDepth, undoDepth} from 'prosemirror-history';
import {Observable} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';

export function toolsAssertion(tools: ReadonlyArray<TuiEditorTool>): boolean {
    return (
        tools.indexOf(TuiEditorTool.Tex) === -1 &&
        tools.indexOf(TuiEditorTool.Attach) === -1
    );
}

enum TableComands {
    InsertColumnBefore,
    InsertColumnAfter,
    InsertRowBefore,
    InsertRowAfter,
    DeleteRow,
    DeleteColumn,
}

// @dynamic
@Component({
    selector: 'tui-toolbar',
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
    host: {
        role: 'toolbar',
        class: 'tui-zero-scrollbar',
    },
})
export class TuiToolbarComponent {
    @Input()
    @tuiDefaultProp(toolsAssertion, 'Attach and TeX are not yet implemented in Editor')
    tools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = defaultEditorColors;

    @Input()
    @tuiDefaultProp()
    editor: Editor | null = null;

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

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    // TODO: i18n
    readonly fontsOptions: ReadonlyArray<TuiEditorFontOption> = [
        {
            size: '2',
            px: 13,
            name: 'Small',
        },
        {
            size: '3',
            px: 15,
            name: 'Normal',
        },
        {
            size: '4',
            px: 17,
            name: 'Large',
        },
        {
            size: '5',
            px: 24,
            family: 'var(--tui-font-heading)',
            name: 'Subtitle',
        },
        {
            size: '6',
            px: 30,
            family: 'var(--tui-font-heading)',
            name: 'Title',
        },
    ];

    // TODO: i18n
    readonly codesOptions: readonly string[] = ['Code in the text', 'Code in block'];

    readonly tableCommands = [
        [
            {name: 'Add row before', command: TableComands.InsertRowBefore},
            {name: 'Add row after', command: TableComands.InsertRowAfter},
        ],
        [
            {name: 'Add column before', command: TableComands.InsertColumnBefore},
            {name: 'Add column after', command: TableComands.InsertColumnAfter},
        ],
        [
            {name: 'Delete row', command: TableComands.DeleteRow},
            {name: 'Delete column', command: TableComands.DeleteColumn},
        ],
    ];

    tableCoordinate = {
        x: 0,
        y: 0,
    };

    @ViewChildren('button')
    private readonly buttons: QueryList<TuiButtonComponent> = EMPTY_QUERY;

    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    constructor(
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts: Record<string, string>,
    ) {
        this.editor?.on('transaction', () => {
            changeDetectorRef.detectChanges();
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

        return first && first.nativeFocusableElement
            ? first.nativeFocusableElement
            : null;
    }

    get lastButton(): TuiNativeFocusableElement | null {
        return this.buttons.reduce<TuiNativeFocusableElement | null>(
            (last, {nativeFocusableElement}) => nativeFocusableElement || last,
            null,
        );
    }

    get bold(): boolean {
        return !!this.editor?.isActive('bold');
    }

    get italic(): boolean {
        return !!this.editor?.isActive('italic');
    }

    get underline(): boolean {
        return !!this.editor?.isActive('underline');
    }

    get strikeThrough(): boolean {
        return !!this.editor?.isActive('strike');
    }

    get unorderedList(): boolean {
        return !!this.editor?.isActive('bulletList');
    }

    get orderedList(): boolean {
        return !!this.editor?.isActive('orderedList');
    }

    get blockquote(): boolean {
        return !!this.editor?.isActive('blockquote');
    }

    get a(): boolean {
        return !!this.editor?.isActive('link');
    }

    get foreColorBlank(): boolean {
        return this.foreColor === 'rgb(51, 51, 51)';
    }

    get hiliteColorBlank(): boolean {
        return this.hiliteColor === 'rgb(51, 51, 51)';
    }

    get undoDisabled(): boolean {
        return !this.editor || undoDepth(this.editor.state) === 0;
    }

    get redoDisabled(): boolean {
        return !this.editor || redoDepth(this.editor.state) === 0;
    }

    get code(): boolean {
        return !!this.editor?.isActive('code');
    }

    get pre(): boolean {
        return !!this.editor?.isActive('codeBlock');
    }

    get subscript(): boolean {
        return !!this.editor?.isActive('subscript');
    }

    get superscript(): boolean {
        return !!this.editor?.isActive('superscript');
    }

    get foreColor(): string {
        return this.editor?.getAttributes('textStyle').fontColor || 'rgb(51, 51, 51)';
    }

    get hiliteColor(): string {
        return (
            this.editor?.getAttributes('textStyle').backgroundColor || 'rgb(51, 51, 51)'
        );
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
        return !!this.editor?.isActive({textAlign: 'left'});
    }

    get alignRight(): boolean {
        return !!this.editor?.isActive({textAlign: 'right'});
    }

    get alignCenter(): boolean {
        return !!this.editor?.isActive({textAlign: 'center'});
    }

    get justify(): boolean {
        return !!this.editor?.isActive({textAlign: 'justify'});
    }

    get columnsNumber(): number {
        return Math.max(3, this.tableCoordinate.y + 2);
    }

    get rowsNumber(): number {
        return Math.max(3, this.tableCoordinate.x + 2);
    }

    tableSelectHovered(x: number, y: number): boolean {
        return x <= this.tableCoordinate.x && y <= this.tableCoordinate.y;
    }

    onBottomFocus() {
        this.focusLast();
    }

    onTopFocus() {
        this.focusFirst();
    }

    onArrowLeft() {
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

    onArrowRight() {
        const focusedIndex = this.buttons.reduce(
            (focusedIndex, button, index) => (button.focused ? index : focusedIndex),
            -1,
        );
        const nextButton = this.buttons.find(
            ({nativeFocusableElement}, index) =>
                index > focusedIndex && !!nativeFocusableElement,
        );

        if (nextButton && nextButton.nativeFocusableElement) {
            setNativeFocused(nextButton.nativeFocusableElement);
        } else {
            this.focusFirst();
        }
    }

    onFont(size: string) {
        this.editor
            ?.chain()
            .focus()
            .setHeading({level: +size as any})
            .run();
    }

    onAlign(align: string) {
        this.editor?.chain().focus().setTextAlign(align).run();
    }

    onImage(input: HTMLInputElement) {
        const file = input.files && input.files[0];

        if (file) {
            this.imageLoader(file)
                .pipe(take(1), takeUntil(this.destroy$))
                .subscribe(image => {
                    this.addImage(image);
                });
        }

        input.value = '';
    }

    onAttach() {
        this.attachClicked.emit();
    }

    onTeX() {
        this.texClicked.emit();
    }

    onLinkClick() {
        this.editor?.chain().focus();
    }

    onLink(hosted: TuiHostedDropdownComponent, url?: string) {
        hosted.open = false;

        if (url) {
            this.editor?.chain().focus().toggleLink({href: url}).run();
        }
    }

    onCode(code: string) {
        if (this.codesOptions[0] === code) {
            this.toggleCode();
        } else {
            this.togglePre();
        }
    }

    onTableOption(command: TableComands) {
        ({
            [TableComands.InsertColumnAfter]: () =>
                this.editor?.chain().focus().addColumnAfter().run(),
            [TableComands.InsertColumnBefore]: () =>
                this.editor?.chain().focus().addColumnBefore().run(),
            [TableComands.InsertRowAfter]: () =>
                this.editor?.chain().focus().addRowAfter().run(),
            [TableComands.InsertRowBefore]: () =>
                this.editor?.chain().focus().addRowBefore().run(),
            [TableComands.DeleteColumn]: () =>
                this.editor?.chain().focus().deleteColumn().run(),
            [TableComands.DeleteRow]: () =>
                this.editor?.chain().focus().deleteRow().run(),
        }[command]());
    }

    mergeCells() {
        this.editor?.chain().focus().mergeCells().run();
    }

    splitCell() {
        this.editor?.chain().focus().splitCell().run();
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.tools.indexOf(tool) !== -1;
    }

    undo() {
        this.editor?.chain().undo().run();
    }

    redo() {
        this.editor?.chain().redo().run();
    }

    indent() {
        // TODO
    }

    outdent() {
        // TODO
    }

    insertHorizontalRule() {
        this.editor?.chain().focus().setHorizontalRule().run();
    }

    removeFormat() {
        this.editor?.commands.unsetAllMarks();
        this.editor?.commands.clearNodes();
    }

    setForeColor(color: string) {
        this.editor?.chain().focus().setFontColor(color).run();
    }

    setHiliteColor(color: string) {
        this.editor?.chain().focus().setBackgroundColor(color).run();
    }

    toggleBold() {
        this.editor?.chain().focus().toggleBold().run();
    }

    toggleItalic() {
        this.editor?.chain().focus().toggleItalic().run();
    }

    toggleUnderline() {
        this.editor?.chain().focus().toggleUnderline().run();
    }

    toggleStrikeThrough() {
        this.editor?.chain().focus().toggleStrike().run();
    }

    toggleOrderedList() {
        this.editor?.chain().focus().toggleOrderedList().run();
    }

    toggleUnorderedList() {
        this.editor?.chain().focus().toggleBulletList().run();
    }

    toggleQuote() {
        this.editor?.chain().focus().toggleBlockquote().run();
    }

    addTable(rows: number, cols: number) {
        this.editor
            ?.chain()
            .focus()
            .insertTable({rows, cols, withHeaderRow: false})
            .run();
    }

    toggleSubscript() {
        this.editor?.chain().focus().toggleSubscript().run();
    }

    toggleSuperscript() {
        this.editor?.chain().focus().toggleSuperscript().run();
    }

    updateCurrent(x: number, y: number) {
        this.tableCoordinate = {x, y};
    }

    private toggleCode() {
        this.editor?.chain().toggleCode().run();
    }

    private togglePre() {
        this.editor?.chain().toggleCodeBlock().run();
    }

    private addImage(image: string) {
        this.editor?.chain().focus().setImage({src: image}).run();
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
