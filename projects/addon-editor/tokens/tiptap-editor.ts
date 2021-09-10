import {InjectionToken} from '@angular/core';
import type {Editor} from '@tiptap/core';
import {ReplaySubject} from 'rxjs';

export const TIPTAP_EDITOR = new InjectionToken<Editor>('Token for Tiptap Editor');

export const LAZY_TIPTAP_EDITOR = new InjectionToken('Lazy loaded Editor', {
    factory: () => {
        const editor$ = new ReplaySubject<typeof Editor>();

        import('@tiptap/core').then(m => editor$.next(m.Editor));

        return editor$;
    },
});
