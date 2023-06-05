import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Self,
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {AbstractTuiEditorResizable} from '@taiga-ui/addon-editor/components/editor-resizable';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {
    TUI_EDITOR_MAX_IMAGE_WIDTH,
    TUI_EDITOR_MIN_IMAGE_WIDTH,
    TUI_IMAGE_EDITOR_OPTIONS,
    TuiEditableImage,
    TuiImageEditorOptions,
} from './image-editor.options';

@Component({
    selector: 'tui-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    providers: [TuiDestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditorComponent extends AbstractTuiEditorResizable<TuiEditableImage> {
    @HostBinding('attr.contenteditable')
    contenteditable = true;

    focused = false;

    @HostBinding('attr.data-drag-handle')
    get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    override get height(): number | string | null {
        return null;
    }

    get alt(): string {
        return this.attrs.alt || '';
    }

    get title(): string {
        return this.attrs.title || '';
    }

    get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src);
    }

    constructor(
        @Inject(TUI_EDITOR_MIN_IMAGE_WIDTH) readonly minWidth: number | null,
        @Inject(TUI_EDITOR_MAX_IMAGE_WIDTH) readonly maxWidth: number | null,
        @Inject(TUI_IMAGE_EDITOR_OPTIONS) readonly options: TuiImageEditorOptions,
        @Inject(DOCUMENT) doc: Document,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLDivElement>,
        @Inject(WINDOW) private readonly win: Window,
    ) {
        super(doc, destroy$);
    }

    @HostListener('document:click.silent', ['$event.target'])
    currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        }
    }

    updateSize([width]: readonly [width: number, height: number]): void {
        const minWidth = this.minWidth ?? this.options.minWidth;
        const maxWidth = this.maxWidth ?? this.options.maxWidth;

        this._width = Math.max(minWidth, Math.min(maxWidth, width));
    }

    private selectFakeText(): void {
        const range = this.doc.createRange();

        this.el.nativeElement.querySelector('p')?.focus();

        range.selectNode(this.el.nativeElement);
        this.win.getSelection()?.removeAllRanges();
        this.win.getSelection()?.addRange(range);
    }
}
