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
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiHandler,
    tuiIsNativeFocusedIn,
} from '@taiga-ui/cdk';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';

@Component({
    selector: `tui-toolbar`,
    templateUrl: `./toolbar.template.html`,
    styleUrls: [`./toolbar.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER],
    host: {
        role: `toolbar`,
    },
})
export class TuiToolbarComponent {
    @ViewChildren(`dropdown`, {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManagerDirective)
    private readonly navigationManager?: TuiToolbarNavigationManagerDirective;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

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

    toolsSet: Set<TuiEditorTool> = new Set(defaultEditorTools);

    @Input()
    @tuiDefaultProp(toolsAssertion, `Attach and TeX are not yet implemented in Editor`)
    set tools(value: readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    constructor(
        @Optional()
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
    ) {}

    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.elementRef.nativeElement) ||
            !!this.dropdowns.find(({nativeElement}) =>
                tuiIsNativeFocusedIn(nativeElement),
            )
        );
    }

    get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    get unorderedList(): boolean {
        return this.editor.isActive(`bulletList`);
    }

    get orderedList(): boolean {
        return this.editor.isActive(`orderedList`);
    }

    get blockquote(): boolean {
        return this.editor.isActive(`blockquote`);
    }

    get a(): boolean {
        return this.editor.isActive(`link`);
    }

    get undoDisabled(): boolean {
        return this.editor.undoDisabled();
    }

    get redoDisabled(): boolean {
        return this.editor.redoDisabled();
    }

    get subscript(): boolean {
        return this.editor.isActive(`subscript`);
    }

    get superscript(): boolean {
        return this.editor.isActive(`superscript`);
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

    @HostListener(`mousedown`, [`$event`, `$event.target`])
    onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest(`button`)) {
            return;
        }

        event.preventDefault();
        this.editor.focus();
    }

    onBottomFocus(): void {
        this.focusLast();
    }

    onTopFocus(): void {
        this.focusFirst();
    }

    onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = ``;

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1))
            .subscribe(image => {
                this.addImage(image);
            });
    }

    onAttach(): void {
        this.attachClicked.emit();
    }

    onTeX(): void {
        this.texClicked.emit();
    }

    onLink(hosted: TuiHostedDropdownComponent, url?: string): void {
        hosted.open = false;

        if (url) {
            this.editor.toggleLink(url);
            this.editor.selectClosest();
        }
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }

    undo(): void {
        this.editor.undo();
    }

    redo(): void {
        this.editor.redo();
    }

    insertHorizontalRule(): void {
        this.editor.setHorizontalRule();
    }

    removeFormat(): void {
        this.editor.removeFormat();
    }

    toggleOrderedList(): void {
        this.editor.toggleOrderedList();
    }

    toggleQuote(): void {
        this.editor.toggleBlockquote();
    }

    toggleSubscript(): void {
        this.editor.toggleSubscript();
    }

    toggleSuperscript(): void {
        this.editor.toggleSuperscript();
    }

    private addImage(image: string): void {
        this.editor.setImage(image);
    }

    private focusFirst(): void {
        const firstButton = this.navigationManager?.findFirstFocusableTool();

        if (firstButton) {
            firstButton.focus();
        }
    }

    private focusLast(): void {
        const lastButton = this.navigationManager?.findFirstFocusableTool(true);

        if (lastButton) {
            lastButton.focus();
        }
    }
}

function toolsAssertion(tools: readonly TuiEditorTool[]): boolean {
    return !tools.includes(TuiEditorTool.Tex) && !tools.includes(TuiEditorTool.Attach);
}
