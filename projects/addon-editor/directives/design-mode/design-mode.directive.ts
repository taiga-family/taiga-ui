import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    NgZone,
    Optional,
    Output,
    Renderer2,
    Sanitizer,
    SecurityContext,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TUI_EDITOR_STYLES, TUI_IMAGE_LOADER} from '@taiga-ui/addon-editor/tokens';
import {tuiInsertHtml} from '@taiga-ui/addon-editor/utils';
import {
    EMPTY_FUNCTION,
    getClipboardDataText,
    preventDefault,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiComputedDocumentException,
    TuiDestroyService,
    TuiEventWith,
    TuiFocusableElementAccessor,
    tuiGetClosestFocusable,
    TuiHandler,
    tuiIsNativeFocused,
    tuiRequiredSetter,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TUI_SANITIZER} from '@taiga-ui/core';
import {merge, Observable} from 'rxjs';
import {filter, map, mapTo, take, takeUntil} from 'rxjs/operators';

const PADDING = 26;

@Directive({
    selector: 'iframe[tuiDesignMode]',
    exportAs: 'tuiDesignMode',
    providers: [
        TuiDestroyService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TuiDesignModeDirective),
            multi: true,
        },
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiDesignModeDirective),
        },
    ],
})
export class TuiDesignModeDirective
    implements ControlValueAccessor, TuiFocusableElementAccessor
{
    private onTouched = EMPTY_FUNCTION;
    private onChange = EMPTY_FUNCTION;
    private _value = '';
    private _exampleText = '';
    private _disabled = false;
    private readonly observer = new MutationObserver(() => this.update());

    @Input()
    @tuiRequiredSetter()
    set exampleText(exampleText: string) {
        this.setExampleText(exampleText);
    }

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    @HostBinding('style.pointerEvents')
    pointerEvents = 'all';

    constructor(
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLIFrameElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_EDITOR_STYLES)
        private readonly styles: string,
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<File, Observable<string>>,
        @Inject(Sanitizer) private readonly sanitizer: Sanitizer,
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
    ) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden');
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.documentRef ? this.documentRef.body : null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.elementRef.nativeElement);
    }

    // Typesafe version until iframe is initialized
    get documentRef(): Document | null {
        return this.elementRef.nativeElement.contentDocument;
    }

    // General use reference to document. Attempt to use it only after load event!
    get computedDocument(): Document {
        const {contentDocument} = this.elementRef.nativeElement;

        if (!contentDocument) {
            throw new TuiComputedDocumentException();
        }

        return contentDocument;
    }

    @HostListener('load')
    onLoad(): void {
        this.initDOM();
        this.initObserver();
        this.initSubscriptions();
    }

    @HostListener('document:mousedown', ['"none"'])
    @HostListener('document:mouseup', ['"all"'])
    onPointer(pointerEvents: 'all' | 'none'): void {
        this.pointerEvents = pointerEvents;
    }

    writeValue(value: string): void {
        this._value = value;

        if (!this.documentRef) {
            return;
        }

        this.renderer.setProperty(this.documentRef.body, 'innerHTML', value || '');
        this.updateHeight();
    }

    registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    setDisabledState(disabled: boolean): void {
        this._disabled = disabled;

        if (this.documentRef) {
            this.renderer.setProperty(
                this.documentRef,
                'designMode',
                disabled ? 'off' : 'on',
            );
        }
    }

    private initDOM(): void {
        const styleTag: HTMLStyleElement = this.renderer.createElement('style');
        const styles: Text = this.renderer.createText(this.styles);

        styleTag.type = 'text/css';
        styleTag.appendChild(styles);

        this.renderer.addClass(this.computedDocument.body, 'tui-editor-socket');
        this.renderer.appendChild(this.computedDocument.head, styleTag);
        this.setDisabledState(this._disabled);
        this.setExampleText(this._exampleText);
        this.writeValue(this._value);
        this.computedDocument.execCommand('defaultParagraphSeparator', false, 'p');
        this.renderer.removeStyle(this.elementRef.nativeElement, 'visibility');
    }

    private initObserver(): void {
        // Fallback for IE, removed on initial input event
        this.observer.observe(this.computedDocument.body, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }

    private initSubscriptions(): void {
        this.initInputSubscription();
        this.initTabSubscription();
        this.initFocusSubscription();
        this.initPasteSubscription();
        this.initDropSubscription();
        this.initImageSubscription();
    }

    private initInputSubscription(): void {
        typedFromEvent(this.computedDocument, 'input')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.observer.disconnect();
                this.update();
            });
    }

    private initTabSubscription(): void {
        typedFromEvent(this.computedDocument, 'keydown')
            .pipe(takeUntil(this.destroy$))
            .subscribe(event => {
                if (event.key !== 'Tab' || !this.elementRef.nativeElement.ownerDocument) {
                    return;
                }

                event.preventDefault();

                const element = tuiGetClosestFocusable(
                    this.elementRef.nativeElement,
                    event.shiftKey,
                    this.elementRef.nativeElement.ownerDocument.body,
                );

                if (element) {
                    setNativeFocused(element);
                }
            });
    }

    private initFocusSubscription(): void {
        if (!this.computedDocument.defaultView) {
            return;
        }

        merge(
            typedFromEvent(this.computedDocument.defaultView, 'blur').pipe(mapTo(false)),
            typedFromEvent(this.computedDocument.defaultView, 'focus').pipe(mapTo(true)),
        )
            .pipe(takeUntil(this.destroy$))
            .subscribe(focused => {
                if (!focused) {
                    this.onTouched();
                }

                this.focusedChange.emit(focused);
                this.markForCheck();
            });
    }

    private initPasteSubscription(): void {
        typedFromEvent(this.computedDocument, 'paste')
            .pipe(
                filter(
                    event =>
                        !event.clipboardData ||
                        !event.clipboardData.types.includes('Files'),
                ),
                preventDefault(),
                map(event => this.sanitize(getClipboardDataText(event, 'text/html'))),
                takeUntil(this.destroy$),
            )
            .subscribe(html => {
                tuiInsertHtml(this.computedDocument, html);
            });
    }

    private initDropSubscription(): void {
        typedFromEvent(this.computedDocument, 'drop')
            .pipe(
                filter(
                    (
                        event,
                    ): event is TuiEventWith<DragEvent, Document> & {
                        dataTransfer: DataTransfer;
                    } => !!event.dataTransfer,
                ),
                preventDefault(),
                takeUntil(this.destroy$),
            )
            .subscribe(event => {
                this.setSelectionAt(event.x, event.y);

                if (
                    Array.prototype.indexOf.call(event.dataTransfer.types, 'Files') !== -1
                ) {
                    this.handleImageDrop(event.dataTransfer);
                } else {
                    tuiInsertHtml(
                        this.computedDocument,
                        this.sanitize(event.dataTransfer.getData('text/html')),
                    );
                }
            });
    }

    private initImageSubscription(): void {
        typedFromEvent(this.computedDocument, 'load', {capture: true})
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.updateHeight();
            });
    }

    private setExampleText(exampleText: string): void {
        this._exampleText = exampleText;

        if (this.documentRef) {
            this.renderer.setAttribute(
                this.documentRef.body,
                'aria-placeholder',
                exampleText,
            );
        }
    }

    private handleImageDrop(dataTransfer: DataTransfer): void {
        for (let i = 0; i < dataTransfer.files.length; i++) {
            const file = dataTransfer.files.item(i);

            if (file?.type.startsWith('image/')) {
                this.imageLoader(file)
                    .pipe(take(1), takeUntil(this.destroy$))
                    .subscribe(image => {
                        this.addImage(image);
                    });

                break;
            }
        }
    }

    private addImage(image: string): void {
        this.computedDocument.execCommand('insertImage', false, image);
    }

    private update(): void {
        this.updateValue();
        this.updateHeight();
        this.markForCheck();
    }

    private updateValue(): void {
        this._value = this.computedDocument.body.innerHTML;
        this.onChange(this._value);
    }

    private updateHeight(): void {
        if (!this.documentRef?.createRange) {
            return;
        }

        const range = this.documentRef.createRange();

        range.selectNodeContents(this.documentRef.body);

        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'height',
            String(range.getBoundingClientRect().height + PADDING),
        );
    }

    private setSelectionAt(x: number, y: number): void {
        // IE
        if (
            !this.computedDocument.caretRangeFromPoint &&
            !this.computedDocument.caretPositionFromPoint
        ) {
            const range = (
                this.computedDocument.body as HTMLBodyElement & {
                    createTextRange(): any;
                }
            ).createTextRange();

            range.moveToPoint(x, y);
            range.select();

            return;
        }

        const range = this.computedDocument.caretRangeFromPoint
            ? this.computedDocument.caretRangeFromPoint(x, y)
            : this.computedDocument.createRange();

        // Firefox
        if (!this.computedDocument.caretRangeFromPoint) {
            const caretPosition = this.computedDocument.caretPositionFromPoint(x, y);

            if (!caretPosition) {
                return;
            }

            const {offsetNode, offset} = caretPosition;

            range.setStart(offsetNode, offset);
            range.setEnd(offsetNode, offset);
        }

        const {defaultView} = this.computedDocument;
        const selection = defaultView ? defaultView.getSelection() : null;

        if (!defaultView || !selection) {
            return;
        }

        selection.removeAllRanges();
        selection.addRange(range);
    }

    private sanitize(content: string): string {
        return (
            (this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(SecurityContext.HTML, content)
                : this.sanitizer.sanitize(SecurityContext.HTML, content)) || ''
        );
    }

    private markForCheck(): void {
        this.ngZone.run(() => {
            this.changeDetectorRef.markForCheck();
        });
    }
}
