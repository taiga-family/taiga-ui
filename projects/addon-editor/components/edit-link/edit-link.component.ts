import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Optional,
    Output,
    ViewChild,
} from '@angular/core';
import {TUI_DOCUMENT_OR_SHADOW_ROOT} from '@taiga-ui/core';
import {TuiInputInlineComponent} from '@taiga-ui/kit';

const MAX_LENGTH = 60;
const START = MAX_LENGTH - 20;
const END = MAX_LENGTH - START - 10;

// @dynamic
@Component({
    selector: 'tui-edit-link',
    templateUrl: './edit-link.template.html',
    styleUrls: ['./edit-link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditLinkComponent {
    @ViewChild(TuiInputInlineComponent)
    private readonly input?: TuiInputInlineComponent;

    @Output()
    readonly addLink = new EventEmitter<string>();

    @Output()
    readonly removeLink = new EventEmitter<void>();

    url: string = this.makeUrl();

    edit = !this.url;

    prefix = 'http://';

    constructor(
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
        @Optional()
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        private readonly shadowRootRef: DocumentOrShadowRoot | null,
    ) {}

    get hasUrl(): boolean {
        return !!this.url;
    }

    get href(): string {
        return `${this.prefix}${this.url}`;
    }

    get shortUrl(): string {
        return this.url.length < MAX_LENGTH
            ? this.url
            : `${this.url.slice(0, Math.max(0, START))}...${this.url.slice(
                  this.url.length - END,
              )}`;
    }

    private get isViewMode(): boolean {
        return !this.edit;
    }

    // TODO: 3.0 remove shadow root ref in v3.0
    private get selection(): Selection | null {
        return (this.shadowRootRef || this.documentRef).getSelection();
    }

    @HostListener('document:selectionchange')
    onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.makeUrl();
        }
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        const tagName =
            event.target instanceof HTMLElement ? event.target.tagName.toLowerCase() : '';

        if (tagName === 'a' || tagName === 'button' || tagName === 'input') {
            return;
        }

        event.preventDefault();
    }

    onSave(): void {
        if (this.url) {
            this.addLink.emit(this.href);
        } else {
            this.removeLink.emit();
        }
    }

    onBackspace(): void {
        if (!this.url) {
            this.prefix = 'http://';
        }
    }

    onEdit(): void {
        this.edit = true;
    }

    onRemove(): void {
        this.removeLink.emit();
    }

    onChange(url: string): void {
        this.url = this.removePrefix(url);
    }

    onClear(): void {
        this.url = '';
    }

    focused(): boolean {
        return !!this.input?.focused;
    }

    private makeUrl(): string {
        return this.selection ? this.getHref(this.selection) : '';
    }

    private getHref({focusNode}: Selection): string {
        const a = focusNode?.parentElement?.closest('a');

        return a ? this.removePrefix(a.getAttribute('href') || '') : '';
    }

    private removePrefix(url: string): string {
        if (url.startsWith('http://')) {
            this.prefix = 'http://';

            return url.replace('http://', '');
        }

        if (url.startsWith('https://')) {
            this.prefix = 'https://';

            return url.replace('https://', '');
        }

        return url;
    }
}
