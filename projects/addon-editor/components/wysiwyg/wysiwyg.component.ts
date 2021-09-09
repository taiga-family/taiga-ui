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
import {TuiWysiwygToolbarComponent} from '@taiga-ui/addon-editor/components/wysiwyg-toolbar';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorDirective} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {WYSIWYG_LAZY_EXTENSIONS} from '@taiga-ui/addon-editor/tokens';
import {
    AbstractTuiControl,
    ALWAYS_FALSE_HANDLER,
    isNativeFocusedIn,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {TUI_WYSIWYG_PROVIDERS} from './wysiwyg.providers';

@Component({
    selector: 'tui-wysiwyg',
    templateUrl: './wysiwyg.component.html',
    styleUrls: ['./wysiwyg.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiWysiwygComponent),
        },
        TUI_WYSIWYG_PROVIDERS,
    ],
})
export class TuiWysiwygComponent extends AbstractTuiControl<string> implements OnDestroy {
    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @ViewChild('editorRef', {read: TuiTiptapEditorDirective})
    editorRef!: TuiTiptapEditorDirective;

    @ViewChild(TuiWysiwygToolbarComponent)
    toolbar?: TuiWysiwygToolbarComponent;

    @ViewChild(TuiEditLinkComponent, {read: ElementRef})
    private readonly editLink?: ElementRef<HTMLElement>;

    @Input()
    @tuiDefaultProp()
    tools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    private readonly isSelectionLink = () => !!this.editor?.isActive('link');

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.focused ? this.isSelectionLink : ALWAYS_FALSE_HANDLER;
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(WYSIWYG_LAZY_EXTENSIONS) readonly extensionsLoaded$: Observable<unknown>,
    ) {
        super(control, changeDetectorRef);
    }

    get editor(): TuiEditor | null {
        return this.editorRef?.editor || null;
    }

    get focused(): boolean {
        return (
            !!this.editor?.isFocused ||
            (!!this.toolbar && this.toolbar.focused) ||
            (!!this.editLink && isNativeFocusedIn(this.editLink.nativeElement))
        );
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
