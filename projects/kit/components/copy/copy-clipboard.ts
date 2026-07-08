import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';

/**
 * Angular CDK Clipboard uses a temporary textarea and selects it.
 * This can move focus/selection through document active element and close
 * Taiga overlays. We avoid focus-changing fallback strategies here.
 *
 * https://github.com/angular/components/blob/main/src/cdk/clipboard/pending-copy.ts
 */
@Injectable({providedIn: 'root'})
export class TuiClipboard {
    private readonly doc = inject(DOCUMENT);

    public async copy(text: string): Promise<boolean> {
        return text
            ? (await this.copyWithNavigator(text)) || this.copyWithExecCommand(text)
            : false;
    }

    private async copyWithNavigator(text: string): Promise<boolean> {
        const clipboard = this.doc.defaultView?.navigator?.clipboard;

        if (!clipboard?.writeText) {
            return false;
        }

        try {
            await clipboard.writeText(text);

            return true;
        } catch {
            return false;
        }
    }

    private copyWithExecCommand(text: string): boolean {
        let copied = false;

        const listener = (event: ClipboardEvent): void => {
            if (!event.clipboardData) {
                return;
            }

            event.clipboardData.setData('text/plain', text);
            event.preventDefault();

            copied = true;
        };

        this.doc.addEventListener('copy', listener);

        try {
            return this.doc.execCommand('copy') && copied;
        } catch {
            return false;
        } finally {
            this.doc.removeEventListener('copy', listener);
        }
    }
}
