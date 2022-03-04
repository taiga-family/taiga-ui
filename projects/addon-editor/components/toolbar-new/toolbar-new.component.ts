import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorColors, defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TUI_EDITOR_TOOLBAR_TEXTS, TUI_IMAGE_LOADER} from '@taiga-ui/addon-editor/tokens';
import {
    EMPTY_QUERY,
    getClosestElement,
    isNativeFocusedIn,
    setNativeFocused,
    tuiDefaultProp,
    TuiHandler,
} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {LanguageEditor} from '@taiga-ui/i18n';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';

// @dynamic
@Component({
    selector: 'tui-toolbar[new]',
    templateUrl: './toolbar-new.template.html',
    styleUrls: ['./toolbar-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
    host: {
        role: 'toolbar',
    },
})
export class TuiToolbarNewComponent {
    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManagerDirective)
    private readonly navigationManager?: TuiToolbarNavigationManagerDirective;

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

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    toolsSet: Set<TuiEditorTool> = new Set(defaultEditorTools);

    @Input()
    @tuiDefaultProp(toolsAssertion, 'Attach and TeX are not yet implemented in Editor')
    set tools(value: ReadonlyArray<TuiEditorTool>) {
        this.toolsSet = new Set(value);
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

    get unorderedList(): boolean {
        return this.editor.isActive('bulletList');
    }

    get orderedList(): boolean {
        return this.editor.isActive('orderedList');
    }

    get blockquote(): boolean {
        return this.editor.isActive('blockquote');
    }

    get a(): boolean {
        return this.editor.isActive('link');
    }

    get undoDisabled(): boolean {
        return this.editor.undoDisabled();
    }

    get redoDisabled(): boolean {
        return this.editor.redoDisabled();
    }

    get subscript(): boolean {
        return this.editor.isActive('subscript');
    }

    get superscript(): boolean {
        return this.editor.isActive('superscript');
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

    @HostListener('mousedown', ['$event', '$event.target'])
    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestElement(target, 'button')) {
            return;
        }

        event.preventDefault();
        this.editor.focus();
    }

    onBottomFocus() {
        this.focusLast();
    }

    onTopFocus() {
        this.focusFirst();
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

    enabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }

    undo() {
        this.editor.undo();
    }

    redo() {
        this.editor.redo();
    }

    insertHorizontalRule() {
        this.editor.setHorizontalRule();
    }

    removeFormat() {
        this.editor.removeFormat();
    }

    toggleOrderedList() {
        this.editor.toggleOrderedList();
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

    private addImage(image: string) {
        this.editor.setImage(image);
    }

    private focusFirst() {
        const firstButton = this.navigationManager?.findFirstFocusableTool();

        if (firstButton) {
            setNativeFocused(firstButton);
        }
    }

    private focusLast() {
        const lastButton = this.navigationManager?.findFirstFocusableTool(true);

        if (lastButton) {
            setNativeFocused(lastButton);
        }
    }
}

function toolsAssertion(tools: ReadonlyArray<TuiEditorTool>): boolean {
    return !tools.includes(TuiEditorTool.Tex) && !tools.includes(TuiEditorTool.Attach);
}
