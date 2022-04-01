import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiEditLinkComponent} from '@taiga-ui/addon-editor/components/edit-link';
import {TuiToolbarNewComponent} from '@taiga-ui/addon-editor/components/toolbar-new';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {
    AbstractTuiControl,
    isNativeFocusedIn,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TUI_DOCUMENT_OR_SHADOW_ROOT} from '@taiga-ui/core';
import {TuiDropdownSelectionDirective} from '@taiga-ui/kit/directives';
import {Editor} from '@tiptap/core';
import {Observable} from 'rxjs';

import {TUI_EDITOR_NEW_PROVIDERS} from './editor-new.providers';

// @dynamic
@Component({
    selector: 'tui-editor[new]',
    templateUrl: './editor-new.component.html',
    styleUrls: ['./editor-new.style.less'],
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
    @ViewChild(TuiEditLinkComponent, {read: ElementRef})
    private readonly editLink?: ElementRef<HTMLElement>;

    @ViewChild(TuiDropdownSelectionDirective)
    private readonly dropdownSelection?: TuiDropdownSelectionDirective;

    private previousSelectedLink: string | null = null;

    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @Input()
    @tuiDefaultProp()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @ViewChild(TuiToolbarNewComponent)
    readonly toolbar?: TuiToolbarNewComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: TuiEditor,
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
        @Optional()
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        private readonly shadowRootRef: DocumentOrShadowRoot | null,
    ) {
        super(control, changeDetectorRef);
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return () =>
            this.currentFocusedNodeIsAnchor()
                ? this.isValidSelectionAnchorRange()
                : this.previousFocusedNodeIsAnchor();
    }

    get editor(): TuiEditor | null {
        return this.editorService.getOriginTiptapEditor() ? this.editorService : null;
    }

    get focused(): boolean {
        return (
            !!this.editor?.isFocused ||
            (!!this.toolbar && this.toolbar.focused) ||
            (!!this.editLink && isNativeFocusedIn(this.editLink.nativeElement))
        );
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    private get selection() {
        return (this.shadowRootRef || this.documentRef).getSelection();
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onModelChange(value: string) {
        this.updateValue(value);
    }

    addLink(link: string) {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    removeLink() {
        this.editor?.unsetLink();
        this.dropdownSelection?.closeDropdownBox();
    }

    selectedLink(url: string) {
        this.previousSelectedLink = url;
    }

    selectLinkIfClosest() {
        const link = this.getMarkedLinkBeforeSelectClosest();
        const href = link?.attrs.href ?? null;

        if (link && this.isValidSelectionAnchorRange()) {
            this.editor?.selectClosest();

            /**
             * @note:
             * if we already have a dropdown with link editing open,
             * we need to reopen with a new template
             */
            if (this.previousSelectedLink != null && href != this.previousSelectedLink) {
                this.dropdownSelection?.closeDropdownBox();
                this.dropdownSelection?.openDropdownBox();
            }
        }

        this.previousSelectedLink = href;
    }

    currentFocusedNodeIsAnchor(): boolean {
        if (!this.selection?.anchorNode || !this.selection?.anchorNode?.parentElement) {
            return false;
        }

        return !!this.selection.anchorNode.parentElement.closest('a');
    }

    previousFocusedNodeIsAnchor(): boolean {
        if (!this.selection?.focusNode || !this.selection?.focusNode?.parentElement) {
            return false;
        }

        return !!this.selection.focusNode.parentElement.closest('a');
    }

    ngOnDestroy() {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get hasValue(): boolean {
        return !!this.value;
    }

    private getMarkedLinkBeforeSelectClosest() {
        const [link] = this.editor?.state.tr.selection.$anchor.marks() ?? [];
        const isLink = link?.type.name === 'link';

        return isLink ? link : null;
    }

    private isValidSelectionAnchorRange() {
        let isValid = false;
        const isAnchor = this.currentFocusedNodeIsAnchor();

        if (isAnchor && this.selection) {
            const range = this.selection.getRangeAt(0);
            const delta = Math.abs(range.endOffset - range.startOffset);
            const length = (range.commonAncestorContainer as Text).length ?? 0;

            isValid =
                delta > 0 ||
                (length === 1 && range.startOffset === 0) ||
                (length > 1 && range.endOffset < length);
        }

        return isValid;
    }
}
