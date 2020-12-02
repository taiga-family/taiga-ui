import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';

// http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
// @dynamic
@Injectable({
    providedIn: 'root',
})
export class ClipboardCopyService {
    constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

    copyToClipboard(text: string): boolean {
        const textArea = this.documentRef.createElement(
            'textArea',
        ) as HTMLTextAreaElement;

        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';

        this.documentRef.body.appendChild(textArea);

        textArea.select();

        try {
            this.documentRef.execCommand('copy');

            return true;
        } catch (err) {
            return false;
        } finally {
            this.documentRef.body.removeChild(textArea);
        }
    }
}
