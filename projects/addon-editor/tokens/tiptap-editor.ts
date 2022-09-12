import {InjectionToken} from '@angular/core';
import type {Editor} from '@tiptap/core';
import {Observable, ReplaySubject} from 'rxjs';

export const TIPTAP_EDITOR = new InjectionToken<Observable<Editor>>(
    `[TIPTAP_EDITOR]: Token for Tiptap Editor`,
);

export const LAZY_TIPTAP_EDITOR = new InjectionToken(
    `[LAZY_TIPTAP_EDITOR]: Lazy loaded Editor`,
    {
        factory: () => {
            const editor$ = new ReplaySubject<typeof Editor>(1);

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            import(`@tiptap/core`).then(m => editor$.next(m.Editor));

            return editor$;
        },
    },
);

export const INITIALIZATION_TIPTAP_CONTAINER = new InjectionToken(
    `[INITIALIZATION_TIPTAP_CONTAINER]: The container in which the tip-tap editor is initialized`,
);
