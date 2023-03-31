import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_HTTP_PREFIX,
    TUI_EDITOR_LINK_HTTPS_PREFIX,
    TuiEditorLinkPrefix,
    TuiEditorLinkProtocol,
} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_LINK_TEXTS,
    TUI_EDITOR_OPTIONS,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp, TuiInjectionTokenType, tuiIsElement} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-edit-link',
    templateUrl: './edit-link.template.html',
    styleUrls: ['./edit-link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditLinkComponent {
    private isOnlyAnchorMode: boolean = this.detectAnchorMode();

    @Output()
    readonly addLink = new EventEmitter<string>();

    @Output()
    readonly removeLink = new EventEmitter<void>();

    url: string = this.getHrefOrAnchorId();

    edit = !this.url;

    prefix: TuiEditorLinkPrefix = this.makeDefaultPrefix();

    anchorIds = this.getAllAnchorsIds();

    constructor(
        @Inject(DOCUMENT)
        private readonly documentRef: Document,
        @Inject(TUI_EDITOR_LINK_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_LINK_TEXTS>,
        @Inject(TuiTiptapEditorService) private readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly options: TuiEditorOptions,
    ) {}

    get defaultProtocol(): TuiEditorLinkProtocol {
        return this.options.linkOptions?.protocol ?? TUI_EDITOR_LINK_HTTPS_PREFIX;
    }

    @Input()
    @tuiDefaultProp()
    set anchorMode(mode: boolean) {
        this.isOnlyAnchorMode = mode;
        this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    }

    get anchorMode(): boolean {
        return this.isOnlyAnchorMode;
    }

    get prefixIsHashMode(): boolean {
        return this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
    }

    get hasUrl(): boolean {
        return !!this.url;
    }

    get href(): string {
        return `${this.prefix}${this.url}`;
    }

    get showAnchorsList(): boolean {
        return !this.anchorMode && this.edit && this.anchorIds.length > 0;
    }

    private get isViewMode(): boolean {
        return !this.edit;
    }

    @HostListener('document:selectionchange')
    onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.getHrefOrAnchorId();
            this.anchorMode = this.detectAnchorMode();
        }
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && !event.target.matches('a, button, input')) {
            event.preventDefault();
        }
    }

    setAnchor(anchor: string): void {
        this.url = anchor;
        this.changePrefix(true);
    }

    changePrefix(isPrefix: boolean): void {
        this.prefix = isPrefix ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
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
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : this.defaultProtocol;
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

    private makeDefaultPrefix(): TuiEditorLinkPrefix {
        const a = this.getAnchorElement();

        if (a) {
            return (!a.getAttribute('href') && a.getAttribute('id')) ||
                a.getAttribute('href')?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : this.defaultProtocol;
        }

        return this.defaultProtocol;
    }

    private detectAnchorMode(): boolean {
        const a = this.getAnchorElement();

        return !a?.href && !!a?.getAttribute('id');
    }

    private getFocusedParentElement(): HTMLElement | null {
        return this.documentRef.getSelection()?.focusNode?.parentElement || null;
    }

    private getAnchorElement(): HTMLAnchorElement | null {
        return this.getFocusedParentElement()?.closest('a') || null;
    }

    private getHrefOrAnchorId(): string {
        const a = this.getAnchorElement();

        return a
            ? this.removePrefix(a.getAttribute('href') || a.getAttribute('id') || '')
            : this.url;
    }

    private removePrefix(url: string): string {
        if (url.startsWith(TUI_EDITOR_LINK_HTTP_PREFIX)) {
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : TUI_EDITOR_LINK_HTTP_PREFIX;

            return url.replace(TUI_EDITOR_LINK_HTTP_PREFIX, '');
        }

        if (url.startsWith(TUI_EDITOR_LINK_HTTPS_PREFIX)) {
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : TUI_EDITOR_LINK_HTTPS_PREFIX;

            return url.replace(TUI_EDITOR_LINK_HTTPS_PREFIX, '');
        }

        if (url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)) {
            this.prefix = TUI_EDITOR_LINK_HASH_PREFIX;

            return url.replace(TUI_EDITOR_LINK_HASH_PREFIX, '');
        }

        return url;
    }

    private getAllAnchorsIds(): string[] {
        const nodes: Element[] = Array.from(
            this.editor
                .getOriginTiptapEditor()
                .view.dom.querySelectorAll('[data-type="jump-anchor"]') ?? [],
        );

        return Array.from(nodes)
            .map(node => node.getAttribute('id') || '')
            .filter(Boolean);
    }
}
