import {
    TUI_EDITOR_EXTENSIONS,
    WYSIWYG_LAZY_EXTENSIONS,
} from '@taiga-ui/addon-editor/tokens';
import {Extension, Mark, Node} from '@tiptap/core';
import {Observable, ReplaySubject} from 'rxjs';

export const TUI_WYSIWYG_PROVIDERS = [
    {
        provide: WYSIWYG_LAZY_EXTENSIONS,
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
