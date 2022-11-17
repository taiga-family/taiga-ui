import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiToolbarNewComponent} from '@taiga-ui/addon-editor/components/toolbar-new';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor/interfaces';
import {TIPTAP_EDITOR, TUI_EDITOR_CONTENT_PROCESSOR} from '@taiga-ui/addon-editor/tokens';
import {tuiIsSafeLinkRange} from '@taiga-ui/addon-editor/utils';
import {
    AbstractTuiControl,
    ALWAYS_FALSE_HANDLER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {Observable} from 'rxjs';

import {TUI_EDITOR_NEW_PROVIDERS} from './editor-new.providers';

// @dynamic
@Component({
    selector: `tui-editor[new]`,
    templateUrl: `./editor-new.component.html`,
    styleUrls: [`./editor-new.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiEditorNewComponent),
        },
        TUI_EDITOR_NEW_PROVIDERS,
    ],
})
export class TuiEditorNewComponent
    extends AbstractTuiControl<string>
    implements OnDestroy
{
    @Input()
    @tuiDefaultProp()
    exampleText = ``;

    @Input()
    @tuiDefaultProp()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @ViewChild(TuiToolbarNewComponent)
    readonly toolbar?: TuiToolbarNewComponent;

    @Output()
    fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    focused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: TuiEditor,
        @Inject(TUI_EDITOR_CONTENT_PROCESSOR)
        private readonly contentProcessor: TuiStringHandler<string>,
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
    ) {
        super(control, changeDetectorRef);
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.focused ? this.isSelectionLink : ALWAYS_FALSE_HANDLER;
    }

    get editor(): TuiEditor | null {
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

    writeValue(value: string | null): void {
        const processed = this.contentProcessor(value || ``);

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed);
        }
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
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

    ngOnDestroy(): void {
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
