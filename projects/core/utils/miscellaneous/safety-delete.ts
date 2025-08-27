import {inject, type Injector, runInInjectionContext} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export function tuiSafetyDelete(injector: Injector, el?: HTMLInputElement): void {
    return runInInjectionContext(injector, () => {
        const element = el ?? tuiInjectElement<HTMLInputElement>();
        const selection = inject(WA_WINDOW).getSelection();

        element.focus({preventScroll: true});
        element.select();

        if (element && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            const start = element.selectionStart ?? 0;
            const end = element.selectionEnd ?? 0;

            if (start !== end) {
                element.value = element.value.slice(0, start) + element.value.slice(end);
                element.selectionStart = element.selectionEnd = start;
                element.dispatchEvent(new Event('input', {bubbles: true}));
            }
        } else if ((selection?.rangeCount ?? 0) > 0 && !selection?.isCollapsed) {
            selection?.deleteFromDocument();
        }
    });
}
