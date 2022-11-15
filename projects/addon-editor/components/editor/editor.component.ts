import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiToolbarComponent} from '@taiga-ui/addon-editor/components/toolbar';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {
    TuiTiptapEditorDirective,
    TuiTiptapEditorService,
} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor/interfaces';
import {TIPTAP_EDITOR, TUI_EDITOR_CONTENT_PROCESSOR} from '@taiga-ui/addon-editor/tokens';
import {tuiIsSafeLinkRange} from '@taiga-ui/addon-editor/utils';
import {
    AbstractTuiControl,
    ALWAYS_FALSE_HANDLER,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {Observable} from 'rxjs';

import {TUI_EDITOR_PROVIDERS} from './editor.providers';

@Component({
    selector: `tui-editor`,
    templateUrl: `./editor.component.html`,
    styleUrls: [`./editor.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiEditorComponent), TUI_EDITOR_PROVIDERS],
})
export class TuiEditorComponent
    extends AbstractTuiControl<string>
    implements OnDestroy, TuiFocusableElementAccessor
{
    @ViewChild(TuiTiptapEditorDirective, {read: ElementRef})
    private readonly element?: ElementRef<HTMLElement>;

    @Input()
    @tuiDefaultProp()
    exampleText = ``;

    @Input()
    @tuiDefaultProp()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @Output()
    fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    @ViewChild(TuiToolbarComponent)
    readonly toolbar?: TuiToolbarComponent;

    focused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: AbstractTuiEditor,
        @Inject(TUI_EDITOR_CONTENT_PROCESSOR)
        private readonly contentProcessor: TuiStringHandler<string>,
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.computedDisabled ? null : this.element?.nativeElement || null;
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.focused ? this.isSelectionLink : ALWAYS_FALSE_HANDLER;
    }

    get editor(): AbstractTuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    override writeValue(value: string | null): void {
        const processed = this.contentProcessor(value || ``);

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed);
        }
    }

    onActiveZone(focused: boolean): void {
        this.focused = focused;
        this.updateFocused(focused);
    }

    onModelChange(value: string): void {
        this.updateValue(value);
    }

    addAnchor(anchor: string): void {
        this.editor?.setAnchor(anchor);
    }

    removeAnchor(): void {
        this.editor?.removeAnchor();
    }

    addLink(link: string): void {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    removeLink(): void {
        this.editor?.unsetLink();
    }

    override ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return ``;
    }

    private readonly isSelectionLink = (range: Range): boolean =>
        this.currentFocusedNodeIsAnchor(range) && tuiIsSafeLinkRange(range);

    /**
     * @description:
     * The commonAncestorContainer not always relevant node element in Range,
     * so the focusNode is used for the correct behaviour from the selection,
     * which is the actual element at the moment
     */
    private currentFocusedNodeIsAnchor(range: Range): boolean {
        return !!range.startContainer.parentElement
            ?.closest(`a`)
            ?.contains(this.documentRef.getSelection()?.focusNode || null);
    }

    private get hasValue(): boolean {
        return !!this.value;
    }
}
