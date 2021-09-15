import {
    LAZY_EDITOR_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
} from '@taiga-ui/addon-editor/tokens';
import type {Extension, Mark, Node} from '@tiptap/core';
import {Observable, ReplaySubject} from 'rxjs';

export const TUI_EDITOR_NEW_PROVIDERS = [
    {
        provide: LAZY_EDITOR_EXTENSIONS,
        deps: [TUI_EDITOR_EXTENSIONS],
        useFactory: extensionsFactory,
    },
];

export function extensionsFactory(
    extensions: Promise<Extension>[],
): Observable<ReadonlyArray<Extension | Mark | Node>> {
    const extensions$ = new ReplaySubject<ReadonlyArray<Extension | Mark | Node>>();

    Promise.all(extensions).then(extensions => extensions$.next(extensions));

    return extensions$;
}
