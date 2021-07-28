import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiToolbarNewComponent} from '@taiga-ui/addon-editor/components/toolbar-new';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TuiTiptapEditorDirective} from '../../directives';

const EMPTY_PARAGRAPH = '<p></p>';

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
    implements AfterViewInit
{
    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @ViewChild('editorRef', {read: TuiTiptapEditorDirective})
    editorRef?: TuiTiptapEditorDirective;

    @ViewChild(TuiToolbarNewComponent)
    toolbar?: TuiToolbarNewComponent;

    @Input()
    @tuiDefaultProp()
    tools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get editor(): TuiEditor | undefined {
        return this.editorRef?.editor;
    }

    ngAfterViewInit() {
        this.editor?.stateChange$.subscribe(() => this.changeDetectorRef.markForCheck());

        this.editor?.valueChange$.subscribe(val => this.onModelChange(val));
    }

    protected getFallbackValue(): string {
        return '';
    }

    get focused(): boolean {
        return !!this.editor?.isFocused || (!!this.toolbar && this.toolbar.focused);
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

    onMouseDown(event: MouseEvent) {
        if (this.editor?.isFocused) {
            return;
        }

        event.preventDefault();
        this.editor?.focus();
    }

    onModelChange(value: string) {
        this.updateValue(value.trim() === EMPTY_PARAGRAPH ? '' : value);
    }

    private get hasValue(): boolean {
        return !!this.value;
    }
}
