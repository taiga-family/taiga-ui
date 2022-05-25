import {
    AfterViewInit,
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
    ALWAYS_FALSE_HANDLER,
    isNativeFocusedIn,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {Mark} from 'prosemirror-model';
import {Observable, timer} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

import {TUI_EDITOR_NEW_PROVIDERS} from './editor-new.providers';

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
    implements AfterViewInit, OnDestroy
{
    @ViewChild(TuiEditLinkComponent, {read: ElementRef})
    private readonly editLink?: ElementRef<HTMLElement>;

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
    ) {
        super(control, changeDetectorRef);
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<Range> {
        return this.focused ? this.isSelectionLink : ALWAYS_FALSE_HANDLER;
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

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    selectLinkIfClosest(): void {
        if (this.getMarkedLinkBeforeSelectClosest()) {
            this.editor?.selectClosest();
        }
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
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

    ngAfterViewInit(): void {
        this.synchronizeLastChangesInsideEditorAfterCreate();
    }

    ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return '';
    }

    private readonly isSelectionLink = (): boolean => !!this.editor?.isActive('link');

    private get hasValue(): boolean {
        return !!this.value;
    }

    private getMarkedLinkBeforeSelectClosest(): Mark | null {
        const [link] = this.editor?.state.tr.selection.$anchor.marks() || [];
        const isLink = link?.type.name === 'link';

        return isLink ? link : null;
    }

    /**
     * @note:
     * TipTap editor can invalidate html attributes inside provided content,
     * in order for the ViewModel and Model to be synchronized
     */
    private synchronizeLastChangesInsideEditorAfterCreate(): void {
        timer(1000)
            .pipe(first(), takeUntil(this.destroy$))
            .subscribe(() => this.updateValue(this.editor?.html || ''));
    }
}
