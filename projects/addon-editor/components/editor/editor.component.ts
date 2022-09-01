import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    Optional,
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
import {TIPTAP_EDITOR, TUI_EDITOR_CONTENT_PROCESSOR} from '@taiga-ui/addon-editor/tokens';
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

    private readonly isSelectionLink = ({startContainer, endContainer}: Range): boolean =>
        !!startContainer.parentElement?.closest(`a`)?.contains(endContainer);

    private get hasValue(): boolean {
        return !!this.value;
    }
}
