import {DOCUMENT} from '@angular/common';
import {inject, type Injector, runInInjectionContext} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export function tuiSafetyInsertText(
    injector: Injector,
    text: string,
    el?: HTMLInputElement,
): void {
    return runInInjectionContext(injector, () => {
        const doc = inject(DOCUMENT);
        const element = el ?? tuiInjectElement<HTMLInputElement>();
        const selection = inject(WA_WINDOW).getSelection();
        const focusedBefore = doc.activeElement === element;

        element.focus({preventScroll: true});
        element.select();

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            const input = element as HTMLInputElement | HTMLTextAreaElement;
            const start = input.selectionStart ?? 0;
            const end = input.selectionEnd ?? 0;

            input.value = input.value.slice(0, start) + text + input.value.slice(end);
            input.selectionStart = input.selectionEnd = start + text.length;
            input.dispatchEvent(new Event('input', {bubbles: true}));
            input.dispatchEvent(new Event('change', {bubbles: true}));
        } else if (element.isContentEditable && selection?.rangeCount) {
            const range = selection.getRangeAt(0);
            const textNode = doc.createTextNode(text);

            range.deleteContents();
            range.insertNode(textNode);
            range.setStartAfter(textNode);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);

                if (element.contains(range.commonAncestorContainer)) {
                    range.deleteContents();
                    range.insertNode(doc.createTextNode(text));
                } else {
                    element.textContent += text;
                }
            } else {
                element.textContent += text;
            }
        }

        if (focusedBefore && doc.activeElement !== element) {
            element.focus();
        }

        element.dispatchEvent(
            new CustomEvent('insertText', {
                detail: {text},
                bubbles: true,
            }),
        );
    });
}
