import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
} from '@angular/core';
import {TUI_EDITOR_LINK_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_DOCUMENT_OR_SHADOW_ROOT} from '@taiga-ui/core';

const MAX_LENGTH = 60;
const START = MAX_LENGTH - 20;
const END = MAX_LENGTH - START - 10;
const HASH_PREFIX = `#` as const;
const HTTP_PREFIX = `http://` as const;
const HTTPS_PREFIX = `https://` as const;

type TuiLinkPrefix = typeof HASH_PREFIX | typeof HTTPS_PREFIX | typeof HTTP_PREFIX;

// @dynamic
@Component({
    selector: `tui-edit-link`,
    templateUrl: `./edit-link.template.html`,
    styleUrls: [`./edit-link.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditLinkComponent {
    private isOnlyAnchorMode: boolean = this.detectAnchorMode();

    @Input()
    @tuiDefaultProp()
    set anchorMode(mode: boolean) {
        this.isOnlyAnchorMode = mode;
        this.prefix = mode ? HASH_PREFIX : this.makeDefaultPrefix();
    }

    @Output()
    readonly addLink = new EventEmitter<string>();

    @Output()
    readonly removeLink = new EventEmitter<void>();

    url: string = this.getHrefOrAnchorId();

    edit = !this.url;

    prefix: TuiLinkPrefix = this.makeDefaultPrefix();

    constructor(
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
        @Optional()
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        private readonly shadowRootRef: DocumentOrShadowRoot | null,
        @Inject(TUI_EDITOR_LINK_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_LINK_TEXTS>,
    ) {}

    get anchorMode(): boolean {
        return this.isOnlyAnchorMode;
    }

    get prefixIsHashMode(): boolean {
        return this.prefix === HASH_PREFIX;
    }

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

    @HostListener(`document:selectionchange`)
    onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.getHrefOrAnchorId();
        }
    }

    @HostListener(`mousedown`, [`$event`])
    onMouseDown(event: MouseEvent): void {
        const tagName =
            event.target instanceof HTMLElement ? event.target.tagName.toLowerCase() : ``;

        if (tagName === `a` || tagName === `button` || tagName === `input`) {
            return;
        }

        event.preventDefault();
    }

    changePrefix(isPrefix: boolean): void {
        this.prefix = isPrefix ? HASH_PREFIX : HTTP_PREFIX;
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
            this.prefix = this.isOnlyAnchorMode ? HASH_PREFIX : HTTP_PREFIX;
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
        this.url = ``;
    }

    private makeDefaultPrefix(): TuiLinkPrefix {
        const a = this.getAnchorElement();

        if (a) {
            return (!a.getAttribute(`href`) && a.getAttribute(`id`)) ||
                a.getAttribute(`href`)?.startsWith(HASH_PREFIX)
                ? HASH_PREFIX
                : HTTP_PREFIX;
        }

        return HTTP_PREFIX;
    }

    private detectAnchorMode(): boolean {
        const a = this.getAnchorElement();

        return !a?.href && !!a?.getAttribute(`id`);
    }

    private getFocusedParentElement(): HTMLElement | null {
        const selection = (this.shadowRootRef || this.documentRef).getSelection();

        return selection?.focusNode?.parentElement || null;
    }

    private getAnchorElement(): HTMLAnchorElement | null {
        return this.getFocusedParentElement()?.closest(`a`) || null;
    }

    private getHrefOrAnchorId(): string {
        const a = this.getAnchorElement();

        return a
            ? this.removePrefix(a.getAttribute(`href`) || a.getAttribute(`id`) || ``)
            : this.url;
    }

    private removePrefix(url: string): string {
        if (url.startsWith(HTTP_PREFIX)) {
            this.prefix = this.isOnlyAnchorMode ? HASH_PREFIX : HTTP_PREFIX;

            return url.replace(HTTP_PREFIX, ``);
        } else if (url.startsWith(HTTPS_PREFIX)) {
            this.prefix = this.isOnlyAnchorMode ? HASH_PREFIX : HTTPS_PREFIX;

            return url.replace(HTTPS_PREFIX, ``);
        } else if (url.startsWith(HASH_PREFIX)) {
            this.prefix = HASH_PREFIX;

            return url.replace(HASH_PREFIX, ``);
        }

        return url;
    }
}
