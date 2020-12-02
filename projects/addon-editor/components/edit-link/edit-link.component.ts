import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Optional,
    Output,
} from '@angular/core';
import {getClosestElement} from '@taiga-ui/cdk';
import {TUI_DOCUMENT_OR_SHADOW_ROOT} from '@taiga-ui/core';

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
    @Output()
    readonly addLink = new EventEmitter<string>();

    @Output()
    readonly removeLink = new EventEmitter<void>();

    edit: boolean;

    url: string;

    prefix = 'http://';

    constructor(
        @Inject(DOCUMENT) documentRef: Document,
        @Optional()
        @Inject(TUI_DOCUMENT_OR_SHADOW_ROOT)
        shadowRootRef: DocumentOrShadowRoot | null,
    ) {
        const doc = shadowRootRef || documentRef;
        const selection = doc.getSelection();

        this.url = selection ? this.getHref(selection) : '';
        this.edit = !this.url;
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
            : this.url.substr(0, START) + '...' + this.url.substr(this.url.length - END);
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {
        const tagName =
            event.target instanceof HTMLElement ? event.target.tagName.toLowerCase() : '';

        if (tagName === 'a' || tagName === 'button' || tagName === 'input') {
            return;
        }

        event.preventDefault();
    }

    onSave() {
        if (this.url) {
            this.addLink.emit(this.href);
        } else {
            this.removeLink.emit();
        }
    }

    onBackspace() {
        if (!this.url) {
            this.prefix = 'http://';
        }
    }

    onEdit() {
        this.edit = true;
    }

    onRemove() {
        this.removeLink.emit();
    }

    onChange(url: string) {
        this.url = this.removePrefix(url);
    }

    onClear() {
        this.url = '';
    }

    private getHref({focusNode}: Selection): string {
        if (!focusNode.parentElement) {
            return '';
        }

        const a = getClosestElement(focusNode.parentElement, 'a');

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
