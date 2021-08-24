import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
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
import {TuiToolbarNewComponent} from '@taiga-ui/addon-editor/components/toolbar-new';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorDirective} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {
    AbstractTuiControl,
    ALWAYS_FALSE_HANDLER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-new',
    templateUrl: './editor-new.component.html',
    styleUrls: ['./editor-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiEditorNewComponent),
        },
    ],
})
export class TuiEditorNewComponent
    extends AbstractTuiControl<string>
    implements OnDestroy
{
    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @ViewChild('editorRef', {read: TuiTiptapEditorDirective})
    editorRef!: TuiTiptapEditorDirective;

    @ViewChild(TuiToolbarNewComponent)
    toolbar?: TuiToolbarNewComponent;

    @Input()
    @tuiDefaultProp()
    tools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.editor?.isActive('link')
            ? () => !!this.editor?.isActive('link')
            : ALWAYS_FALSE_HANDLER;
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get editor(): TuiEditor | null {
        return this.editorRef?.editor || null;
    }

    get focused(): boolean {
        return !!this.editor?.isFocused || (!!this.toolbar && this.toolbar.focused);
    }

    get interactive(): boolean {
        return !this.readOnly && !this.computedDisabled;
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onMouseDown(event: MouseEvent) {
        if (this.editor?.isFocused) {
            return;
        }

        event.preventDefault();
        this.editor?.focus();
    }

    onModelChange(value: string) {
        this.updateValue(value);
    }

    onStateChange() {}

    addLink(link: string) {
        this.editor?.selectClosest();
        this.editor?.setLink(link);
    }

    removeLink() {
        this.editor?.unsetLink();
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
}
