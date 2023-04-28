import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
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
import {
    TIPTAP_EDITOR,
    TUI_EDITOR_CONTENT_PROCESSOR,
    TUI_EDITOR_VALUE_TRANSFORMER,
} from '@taiga-ui/addon-editor/tokens';
import {tuiIsSafeLinkRange} from '@taiga-ui/addon-editor/utils';
import {
    AbstractTuiControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    tuiAsAutofocusHandler,
    tuiAsFocusableItemAccessor,
    TuiAutofocusHandler,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {Editor} from '@tiptap/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {delay, takeUntil} from 'rxjs/operators';

import {TUI_PROSEMIRROR_SELECTOR} from './editor.constants';
import {TUI_EDITOR_PROVIDERS} from './editor.providers';

@Component({
    selector: 'tui-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiEditorComponent),
        tuiAsAutofocusHandler(TuiEditorComponent),
        TUI_EDITOR_PROVIDERS,
    ],
})
export class TuiEditorComponent
    extends AbstractTuiControl<string>
    implements AfterViewInit, OnDestroy, TuiFocusableElementAccessor, TuiAutofocusHandler
{
    @ViewChild(TuiTiptapEditorDirective, {read: ElementRef})
    private readonly el?: ElementRef<HTMLElement>;

    private readonly focused$ = new Subject<void>();

    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @Input()
    @tuiDefaultProp()
    tools: readonly TuiEditorTool[] = defaultEditorTools;

    @Output()
    readonly fileAttached = new EventEmitter<Array<TuiEditorAttachedFile<any>>>();

    @ViewChild(TuiToolbarComponent)
    readonly toolbar?: TuiToolbarComponent;

    focused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TIPTAP_EDITOR) readonly editorLoaded$: Observable<Editor | null>,
        @Inject(TuiTiptapEditorService) readonly editorService: AbstractTuiEditor,
        @Inject(TUI_EDITOR_CONTENT_PROCESSOR)
        private readonly contentProcessor: TuiStringHandler<string>,
        @Inject(DOCUMENT)
        private readonly doc: Document,
        @Optional()
        @Inject(TUI_EDITOR_VALUE_TRANSFORMER)
        transformer: AbstractTuiValueTransformer<string> | null,
    ) {
        super(control, cdr, transformer);
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.computedDisabled ? null : this.el?.nativeElement || null;
    }

    get contentEditableElement(): HTMLDivElement | null {
        return this.el?.nativeElement.querySelector(
            TUI_PROSEMIRROR_SELECTOR,
        ) as HTMLDivElement | null;
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
        if (value === this.value) {
            return;
        }

        const processed = this.contentProcessor(value || '');

        super.writeValue(processed);

        if (processed !== value) {
            this.control?.setValue(processed, {
                onlySelf: false,
                emitEvent: false,
                emitModelToViewChange: false,
                emitViewToModelChange: false,
            });
        }
    }

    onActiveZone(focused: boolean): void {
        this.focused = focused;
        this.updateFocused(focused);
        this.control?.updateValueAndValidity();
    }

    onModelChange(value: string): void {
        this.value = value;
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

    setFocus(): void {
        this.focused$.next();
    }

    ngAfterViewInit(): void {
        combineLatest([this.focused$, this.editorLoaded$])
            .pipe(delay(0), takeUntil(this.destroy$))
            .subscribe(() => this.contentEditableElement?.focus());
    }

    override ngOnDestroy(): void {
        this.editor?.destroy();
    }

    protected getFallbackValue(): string {
        return '';
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
            ?.closest('a')
            ?.contains(this.doc.getSelection()?.focusNode || null);
    }

    private get hasValue(): boolean {
        return !!this.value;
    }
}
